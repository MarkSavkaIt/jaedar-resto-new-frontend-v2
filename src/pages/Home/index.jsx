import React, { useEffect, useState } from "react";
import MenuPage from "./Menu/MenuPage";
import Order from "./Order/Order";

const Home = () => {

	const [localStorageItems, setLocalStorageItems] = useState(JSON.parse(localStorage.getItem("orderList")) || [])

	const addItemToStorage = () => { 
		console.log("add item ()")
		setLocalStorageItems(JSON.parse(localStorage.getItem('orderList')))
	}
	const deleteItem = (id) => {
		console.log("delete item ()")
		const temp = []
		localStorageItems.map(item => {
			if (item.id !== id) temp.push(item)
		})
		localStorage.setItem("orderList", JSON.stringify(temp))
		setLocalStorageItems(temp)
	}

	useEffect(() => console.log(localStorageItems), [localStorageItems])

	return (
		<div className="home">
			<MenuPage addItemToStorage={addItemToStorage} />
			<Order localStorageItems={localStorageItems} deleteItem={deleteItem} />
		</div>
	);
};

export default Home;
