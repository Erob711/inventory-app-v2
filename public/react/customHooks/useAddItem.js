import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../reducers/itemReducer/itemReducer";

const useAddItem = (newItem) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("new item: " + newItem);

    const sendItem = (e) => {
        e.preventDefault();
        dispatch(addItem(newItem));
        navigate("/");
    }
    return sendItem;
}

export default useAddItem;