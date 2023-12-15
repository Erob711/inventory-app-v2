import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateItem } from "../reducers/itemReducer/itemReducer";
const useEditItem = (id, newItem, items) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("new item: " + newItem);

    const editItem = (e) => {
        e.preventDefault();
        dispatch(updateItem(id, newItem, items));
        navigate("/");
    }
    return editItem;
}

export default useEditItem;