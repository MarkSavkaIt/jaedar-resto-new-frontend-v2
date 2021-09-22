import React from "react";
import MenuPage from "./Menu/MenuPage";
import Order from "./Order/Order";

const Home = () => {
	return (
		<div className="home">
			<MenuPage />
			<Order />
		</div>
	);
};

export default Home;
