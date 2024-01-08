import axios from "axios";
import apiURL from "../api.js";
import { UserObj, ReturnMsg } from "../types.js";

// i think its redundant to have both the Promise<UserObj[]> AND axios.get<UserObj[]>
const getUsers = async (): Promise<UserObj[]> => {
    try {
        const response = await axios.get<UserObj[]>(`${apiURL}/users`);
        console.log(response.data);
        return response.data;
    } catch(error) {
        if(error instanceof Error) console.log(error.message);

        throw error;
    }
};

const getOne = async (username: string): Promise<UserObj> => {
    try {
        const response = await axios.get<UserObj>(`${apiURL}/users/${username}`);
        return response.data;
    } catch(error) {
        if(error instanceof Error) console.log(error.message);

        throw error;
    }
}

const getCart = async (id: number | string): Promise<UserObj> => {
    try {
        const response = await axios.get<UserObj>(`${apiURL}/users/cart/${id}`)
        console.log(response.data);
        return response.data;
    } catch(error) {
        if(error instanceof Error) console.log(error.message);

        throw error;
    }
};

const editCart = async (addOrRemove: string, userId: number, itemId: number): Promise<ReturnMsg> => {
    try {
        const response = await axios.put<ReturnMsg>(`${apiURL}/users/editCart/${addOrRemove}/${userId}/${itemId}`);
        console.log(response.data);
        return response.data;
    } catch(error) {
        if(error instanceof Error) console.log(error.message);

        throw error;
    }
};

export default { getUsers, getOne, getCart, editCart };