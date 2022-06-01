import React, { useState } from "react";

import Header from "./Header";
import Menu from "./Menu";

const MenuPage = ({ addItemToStorage }) => {

	const [search, setSearch] = useState('')

	const handleSearch = (e) => {
		setSearch(e.target.value)
	}

	return (
		<div className="menu_page">
			<Header handleSearch={handleSearch} />
			<Menu search={search} addItemToStorage={addItemToStorage} />
		</div>
	);
};
export default MenuPage;
