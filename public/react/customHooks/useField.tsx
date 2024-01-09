import { useState } from "react";

// i dont love this
// initialState is hardcoded to be string or number, but it should be able to handle more types, such as arrays or booleans
const useField = (inputType: string, initialState: string | number) => {
    const [value, setValue] = useState(initialState);
    
    // const onChange = (e) => {
    //     setValue(e.target.value);
    // }

    const onChange = (e: React.SyntheticEvent) : void => {
        const evt = e.target as HTMLInputElement
        setValue(evt.value);
    }

    return {
        inputType,
        value,
        onChange
    }
}

export default useField;