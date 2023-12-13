import React from "react";
import { Item } from "../Item/Item.js";
import './ItemsList.css';
import { useSelector } from "react-redux";

export const ItemsList = () => {
  const items = useSelector((state) => state.items);
  if (!items) {
    return <h1>no Items</h1>;
  } else {
    return (
      <div className="flex-container">
        {items.map((item, idx) => (
          <Item item={item} key={idx} />
        ))}
      </div>
    );
  }
};
