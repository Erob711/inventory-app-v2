import React from "react";
import { Item } from "../Item/Item";
import './ItemsList.css';
import { ItemObj } from "../../types.js";

interface Props {
  items: ItemObj[]
}

export const ItemsList = ({ items } : Props) => {
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
