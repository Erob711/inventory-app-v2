import axios from "axios";
import apiURL from "../api.js";

const getUsers = async () => {
    try {
        const response = await axios.get(`${apiURL}/users`);
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.log(error.message);
    }
};

const getOne = async (username) => {
    try {
        const response = await axios.get(`${apiURL}/users/${username}`);
        return response.data;
    } catch(error) {
        console.log(error.message);
    }
}

const getCart = async (id) => {
    try {
        const response = await axios.get(`${apiURL}/users/cart/${id}`)
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.log(error.message);
    }
};

const editCart = async (addOrRemove, userId, itemId) => {
    try {
        const response = await axios.put(`${apiURL}/users/editCart/${addOrRemove}/${userId}/${itemId}`);
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.log(error.message);
    }
};

export default { getUsers, getOne, getCart, editCart };