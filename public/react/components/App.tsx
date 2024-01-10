import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import ItemPage from '../pages/ItemPage/ItemPage';
import AddItem from './AddItem/AddItem';
import EditItem from './EditItem/EditItem';
import LoginPage from '../pages/LoginPage/Login';
import CartPage from '../pages/CartPage/CartPage';
import { UserObj } from '../types.js';

export const App = () => {
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
			<Route path="/newItem" element={<AddItem />}/>
			<Route path="/editItem/:id" element={<EditItem />}/>
			<Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
			<Route path="/cart" element={<CartPage />} />
		</Routes>
	)
}