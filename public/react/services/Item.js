import axios from "axios";
import apiURL from "../api.js";

const getItems = async () => {
  try {
      const response = await axios.get(`${apiURL}/items`)
      console.log(response.data)
      return response.data
  }
  catch(error) {
      console.log(error.message)
  }
};

const getItem = async (id) => {
  try {
      const response = await axios.get(`${apiURL}/items/${id}`)
      // console.log(response.data)
      return response.data
  }
  catch(error) {
      console.log(error.message)
  }
};

const createItem = async (newItem) => {
  try {
    // node / express version
    // const response = await axios.post(`${apiURL}/items`, newItem);
    // django version -- needs trailing backslash on POST route
    const response = await axios.post(`${apiURL}/items/`, newItem);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const deleteItem = async (id) => {
  try {
      await axios.delete(`${apiURL}/items/${id}`)
      console.log('deleted item')
  } catch(error) {
      console.log(error.message)
  }
};

const editItem = async (id, edittedItem) => {
  try {
    const response = await axios.put(`${apiURL}/items/${id}`, edittedItem);
    return response.data
  } catch(error) {
    console.log(error.message)
  }
}

export default {getItem, createItem, deleteItem, getItems, editItem };
