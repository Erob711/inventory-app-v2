import itemService from "../services/Item";
import { useState } from "react";

// unfinished
const useFetchItem = (id) => {
    const [item, setItem] = useState({})

    async function fetchItem() {
		try {
            const item = await itemService.getItem(id);
            console.log(item)
            setItem(item)
		}
		catch (error) {
			console.log(error.message)
		}
	}
    return {
        fetchItem,
        item
    }
}

export default useFetchItem;