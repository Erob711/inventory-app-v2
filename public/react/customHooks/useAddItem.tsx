import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../reducers/itemReducer/itemReducer";
import { IncomingItemObj } from "../types";

const useAddItem = (newItem: IncomingItemObj) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("new item: " + newItem);

    const sendItem = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        dispatch(addItem(newItem));
        navigate("/");
    }
    return sendItem;
}

export default useAddItem;