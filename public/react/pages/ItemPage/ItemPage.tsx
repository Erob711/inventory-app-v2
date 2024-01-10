import { Link, useParams, useNavigate } from "react-router-dom";
import userServices from '../../services/User';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { deleteItem } from "../../reducers/itemReducer/itemReducer"; 
import "./ItemPage.css";
import itemService from "../../services/Item";
import { ItemObj, UserObj } from "../../types";
import React from "react";

const ItemPage = () => {
  
  // TS throws error if we dont initialize all of these keys
  const [item, setItem] = useState<ItemObj>({
    id: NaN,
    name: "",
    price: NaN,
    description: "",
    category: "",
    image: ""
  });

  const dispatch = useDispatch();
  // once you refactor the store.tsx, change this back to this below
  // const items: ItemObj[] = useSelector((state) => state.items);

  // in the meantime, we specify that the state has an items property of ItemObj[] type
  const items: ItemObj[] = useSelector((state: { items: ItemObj[] }) => state.items);
  const id: string = useParams().id;
  const navigate = useNavigate();
  const curUser: UserObj = JSON.parse(localStorage.getItem('loggedInUser'));


  async function fetchItem(): Promise<void> {
		try {
			const item = await itemService.getItem(id);
      setItem(item);
		}
		catch (error) {
			console.log(error.message)
		}
	}
	useEffect(() => {
    fetchItem();
	}, []);
  



  const handleDelete = async (id: number) => {
    await dispatch(deleteItem(id, items));
    navigate('/');
  };

  const handleAddToCart = (removeOrAdd: string, userId: number, itemId: number) => {
    userServices.editCart(removeOrAdd, userId, itemId)
    alert('added to cart')
  }

  const handleRemoveFromCart = (removeOrAdd: string, userId: number, itemId: number) => {
    userServices.editCart(removeOrAdd, userId, itemId)
    alert('removed from cart')
  }

  return (
    <>
      <div className="page">
        <div className="item-section">
          <div className="item">
            <h3><span className="tag">name</span>{item.name}</h3>
            <img className="item-image" src={item.image} alt={item.name} />
            <h3><span className="tag">price</span>${item.price}</h3>
            <h3><span className="tag">description</span>{item.description}</h3>
            <h3><span className="tag">category</span>{item.category}</h3>

          </div>

          <div className="buttons">
            <Link to={`/editItem/${id}`} className="link"><button id="edit-btn">Edit</button></Link>
            <button onClick={() => handleDelete(item.id)} id="delete-btn">Delete</button>
            {curUser && <>
                <button onClick={() => handleAddToCart('add', curUser.id, item.id)}>Add to Cart</button>
                <button onClick={() => handleRemoveFromCart('remove', curUser.id, item.id)}>Remove from Cart</button>
            </> }
            <Link to="/" className="link"><button>Back to Main Page</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
