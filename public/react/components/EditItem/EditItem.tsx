import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useEditItem from "../../customHooks/useEditItem.js";
import useField from "../../customHooks/useField.js";
import "./EditItem.css";
import React from "react";
import { ItemObj, IncomingItemObj, UseFieldReturn } from "../../types.js";

const EditItem = () => {

	  const items = useSelector((state: { items: ItemObj[] }) => state.items);
    const id: string = useParams().id
    const item: ItemObj = items.find((item) => item.id === Number(id));

    const name: UseFieldReturn = useField("text", item.name);
    const price: UseFieldReturn = useField("text", item.price);
    const description: UseFieldReturn = useField("text", item.description);
    const category: UseFieldReturn = useField("text", item.category);
    const image: UseFieldReturn = useField("text", item.image);

    // this is not ideal
    // I have to tell TS that the incoming values are either a string or number and it has to trust me
    // I would rather ensure that these values are the correct types. dunno how yet
    const edittedItem: IncomingItemObj = {
      name: String(name.value),
      price: Number(price.value),
      description: String(description.value),
      category: String(category.value),
      image: String(image.value),
    };

    const editItem = useEditItem(id, edittedItem, items);

    return (
        <>
          <h1 className="header">Edit Item</h1>
          <form onSubmit={editItem} className="form">
            <input
              type={name.inputType}
              value={name.value}
              onChange={name.onChange}
              className="input"
            />
    
            <input
              type={price.inputType}
              value={price.value}
              onChange={price.onChange}
              className="input"
            />
    
            <input
              type={description.inputType}
              value={description.value}
              onChange={description.onChange}
              className="input"
            />
    
            <input
              type={category.inputType}
              value={category.value}
              onChange={category.onChange}
              className="input"
            />
    
            <input
              type={image.inputType}
              value={image.value}
              onChange={image.onChange}
              className="input"
            />
    
            <button type="submit" className="submit">Submit</button>
          </form>
          <Link to={`/${id}`}><button className="submit">Back To Item</button></Link>
        </>
    )
};

export default EditItem;