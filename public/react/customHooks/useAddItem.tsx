import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../reducers/itemReducer/itemReducer";
import { IncomingItemObj } from "../types";

const useAddItem = (newItem: IncomingItemObj) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sendItem = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault();
        await dispatch(addItem(newItem));
        navigate("/");
    }
    return sendItem;
}

export default useAddItem;