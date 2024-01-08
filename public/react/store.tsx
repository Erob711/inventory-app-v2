import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducers/itemReducer/itemReducer';

const store = configureStore({
    reducer: {
        items: itemReducer,
    },
});

console.log(store.getState(), "state in store.js");

export default store;



// Refactor this after having refactored the itemReducer to TS
// Potential refactor below

// import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
// import { ThunkAction } from 'redux-thunk';
// import itemReducer, { ItemState } from './reducers/itemReducer/itemReducer';

// // Define the root state type
// export interface RootState {
//   items: ItemState;
// }

// // Define the root reducer
// const rootReducer = combineReducers({
//   items: itemReducer,
// });

// // Define the store type
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// const store = configureStore({
//   reducer: rootReducer,
// });