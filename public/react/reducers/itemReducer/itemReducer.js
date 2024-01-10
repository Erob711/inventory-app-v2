import itemServices from '../../services/Item';
import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        setItems(state, action) {
            // console.log(JSON.parse(JSON.stringify(state)));
            return action.payload
        },
        appendItem(state, action) {
            state.push(action.payload)
        }
    }
});

// console.log(itemSlice, 'item reducer')

// async calls regarding our items reducer below
export const initializeItems = () => {
    return async (dispatch) => {
        const items = await itemServices.getItems();
        dispatch(setItems(items));
        console.log("dispatch init hit")
    }
};

export const addItem = (item) => {
    return async (dispatch) => {
        try {
            const newItem = itemServices.createItem(item);
            //REDUX flags line 33 if newItem is not 'serialized'. 
            dispatch(appendItem(JSON.stringify(newItem)));
        } catch(error) {
            console.log(error);
        }
    }
};

export const updateItem = (id, edittedItem, items) => {
    return async (dispatch) => {
        try {
            const itemAfterUpdate = await itemServices.editItem(id, edittedItem);
            console.log(JSON.parse(JSON.stringify(itemAfterUpdate)));
            const newItems = items.map((item) => item.id !== id ? item : itemAfterUpdate);
            dispatch(setItems(newItems));
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteItem = (id, items) => {
    return async (dispatch) => {
        try {
            await itemServices.deleteItem(id);
            dispatch(setItems(items.filter((item) => item !== items.id)));
        } catch (error) {
            console.log(error);
        }
    }
}



export const { setItems, appendItem } = itemSlice.actions;

export default itemSlice.reducer;