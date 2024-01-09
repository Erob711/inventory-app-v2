import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateItem } from "../reducers/itemReducer/itemReducer";
import { ItemObj, IncomingItemObj } from "../types";

const useEditItem = (id: string, newItem: IncomingItemObj, items: ItemObj[]) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const editItem = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        dispatch(updateItem(id, newItem, items));
        navigate("/");
    }
    return editItem;
}

export default useEditItem;