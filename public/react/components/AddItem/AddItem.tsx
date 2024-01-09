import useField  from "../../customHooks/useField";
import useAddItem from "../../customHooks/useAddItem";
import "./AddItem.css";
import React from "react";
import { IncomingItemObj, UseFieldReturn } from "../../types";

const AddItem = () => {

  const name: UseFieldReturn = useField("text", "");
  const price: UseFieldReturn = useField("text", "0");
  const description: UseFieldReturn = useField("text", "");
  const category: UseFieldReturn = useField("text", "");
  const image: UseFieldReturn = useField("text", "");

  const newItem: IncomingItemObj = {
    name: String(name.value),
    price: Number(price.value),
    description: String(description.value),
    category: String(category.value),
    image: String(image.value),
  };
  
  const addItem = useAddItem(newItem);

  return (
    <>
      <h1 className="header">Add an Item</h1>
      <form onSubmit={addItem} className="form">
        <input
          type={name.inputType}
          placeholder="Name"
          value={name.value}
          onChange={name.onChange}
          className="input"
        />

        <input
          type={price.inputType}
          placeholder="Price"
          value={price.value}
          onChange={price.onChange}
          className="input"
        />

        <input
          type={description.inputType}
          placeholder="Description"
          value={description.value}
          onChange={description.onChange}
          className="input"
        />

        <input
          type={category.inputType}
          placeholder="Category"
          value={category.value}
          onChange={category.onChange}
          className="input"
        />

        <input
          type={image.inputType}
          placeholder="Image Link"
          value={image.value}
          onChange={image.onChange}
          className="input"
        />

        <button type="submit" className="submit">Submit & Add Item</button>
      </form>
    </>
  );
};

export default AddItem;
