import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import userServices from '../../services/User';
import { ItemObj, UserObj } from "../../types";

const CartPage = () => {
    const [cartItems, setCartItems] = useState<ItemObj[]>([]); 
    const curUser: UserObj = JSON.parse(localStorage.getItem('loggedInUser'));

    async function fetchCart(): Promise<void> {
		try {
			const fetchedUser = await userServices.getCart(curUser.id);
			setCartItems(fetchedUser.items)
		}
		catch (error) {
            if(error instanceof Error) console.log(error.message)

            throw error;
		}
	}

	useEffect(() => {
		fetchCart();
	}, []);

    if(!cartItems.length) {
        return <h1>Nothing in Cart</h1>
    }

    return (
        <>
            <ul>
                {cartItems.map((item, idx) => (
                    <li key={idx}>{item.name}</li>
                ))}
            </ul>
            <Link to="/"><button>Back to Main Page</button></Link>
        </>
    )
};

export default CartPage;