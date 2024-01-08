import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import ItemPage from '../pages/ItemPage/ItemPage';
import AddItem from './AddItem/AddItem.js';
import EditItem from './EditItem/EditItem.js';
import LoginSignup from '../pages/adminPage/Login.jsx';
import CartPage from '../pages/CartPage/CartPage.jsx';
import { ItemObj, UserObj } from '../types.js';

export const App = () => {
	const [items, setItems] = useState<ItemObj[]>([]);

	const [user, setUser] = useState<UserObj | null>(null);

	useEffect(() => {
	  const localData = localStorage.getItem('loggedInUser');
	  if (localData) {
		setUser(JSON.parse(localData));
	  }
	}, []); // Empty dependency array ensures this runs only once, similar to componentDidMount

	console.log(user)

	return (
		<Routes>
			<Route path="/" element={<Home user={user} />} />
			<Route path="/:id" element={<ItemPage />}/>
			<Route path="/newItem" element={<AddItem items={items} setItems={setItems} />}/>
			<Route path="/editItem/:id" element={<EditItem items={items} setItems={setItems} />}/>
			<Route path="/login" element={<LoginSignup user={user} setUser={setUser} />} />
			<Route path="/cart" element={<CartPage />} />
		</Routes>
	)
}