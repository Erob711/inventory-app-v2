import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducers/itemReducer/itemReducer';

const store = configureStore({
    reducer: {
        items: itemReducer,
    },
});

console.log(store.getState(), "state in store.js");

export default store;