import itemServices from '../../services/Item';
import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        setItems(state, action) {
            return action.payload
        },
    }
});

// console.log(itemSlice, 'item reducer')

// async calls regarding our items reducer below
export const initializeItems = () => {
    return async (dispatch) => {
        const items = await itemServices.getItems();
        dispatch(setItems(items));
    }
};

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;