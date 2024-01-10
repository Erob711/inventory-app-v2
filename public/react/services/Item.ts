import axios from "axios";
import apiURL from "../api.js";
import { ItemObj, ReturnMsg } from "../types.js";

const getItems = async (): Promise<ItemObj[]> => {
  try {
    const response = await axios.get<ItemObj[]>(`${apiURL}/items`)
    console.log(response.data)
    return response.data
  }
  catch(error) {
    if(error instanceof Error) console.log(error.message);

    // throw error;
    return []; // Provide a default value or an empty array in case of an error
  }
};

const getItem = async (id: number | string): Promise<ItemObj> => {
  try {
    const response = await axios.get<ItemObj>(`${apiURL}/items/${id}`)
    // console.log(response.data)
    return response.data
  }
  catch(error) {
    if(error instanceof Error) console.log(error.message);

    throw error;
  }
};

// import incoming item type once made and assign to newItem param
const createItem = async (newItem): Promise<ItemObj> => {
  try {
    // node / express version
    const response = await axios.post(`${apiURL}/items`, newItem);
    // django version -- needs trailing backslash on POST route
    // const response = await axios.post(`${apiURL}/items/`, newItem);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if(error instanceof Error) console.log(error.message);

    throw error;
  }
};

const deleteItem = async (id: number | string): Promise<void> => {
  try {
    await axios.delete(`${apiURL}/items/${id}`)
    console.log('deleted item')
  } catch(error) {
    if(error instanceof Error) console.log(error.message);

    throw error;
  }
};

const editItem = async (id: number | string, edittedItem: ItemObj): Promise<ReturnMsg> => {
  try {
    const response = await axios.put<ReturnMsg>(`${apiURL}/items/${id}`, edittedItem);
    return response.data
  } catch(error) {
    if(error instanceof Error) console.log(error.message);

    throw error;
  }
}

export default {getItem, createItem, deleteItem, getItems, editItem };
