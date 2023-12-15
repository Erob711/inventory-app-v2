import { useState } from "react";
const useField = (inputType, initialState) => {
    const [value, setValue] = useState(initialState);
    const onChange = (e) => {
        setValue(e.target.value);
    }
    return {
        inputType,
        value,
        onChange
    }
}

export default useField;