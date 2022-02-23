import React from "react";

import Header from "./Header";
import Menu from "./Menu";

const MenuPage = ({ addItemToStorage }) => {
	return (
		<div className="menu_page">
			<Header />
			<Menu addItemToStorage={addItemToStorage} />
		</div>
	);
};
export default MenuPage;
