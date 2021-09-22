import React, { useState } from "react";
import MenuFilter from "./MenuFilter";
import MenuGrid from "./MenuGrid";

const Menu = () => {
	const [category, setCategory] = useState("hot");
	const [fade, setFade] = useState("");

	function changeFade(choose = "fade_out") {
		setFade(choose);
	}

	function changeCategory(choose) {
		setCategory(choose);
		setFade("fade_out");
	}

	return (
		<div className="menu">
			<MenuFilter changeCategory={changeCategory} />
			<MenuGrid category={category} fade={fade} changeFade={changeFade} />
		</div>
	);
};

export default Menu;
