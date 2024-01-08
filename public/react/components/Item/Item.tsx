import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';
import { ItemObj } from '../../types';

interface Props {
  item: ItemObj
}

export const Item = ({ item } : Props) => {

  return <>
    <div className = "flex-box">
      <Link to={`/${item.id}`}>
        <h3>{item.name}</h3>
        <img src={item.image} alt={item.name} />
      </Link>
    </div>
  </>
} 
	