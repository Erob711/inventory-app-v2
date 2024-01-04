import React from "react";
import { Item } from "../Item/Item.js";
import './ItemsList.css';

export const ItemsList = ({ items }) => {
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
