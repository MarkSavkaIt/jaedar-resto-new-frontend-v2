import React from "react";
import HeaderInfo from "../../../components/headerInfo";

const Header = ({handleSearch}) => {
	return (
		<header>
			<HeaderInfo label={"Jaedar Resto"} />
			<div className="header-input-search">
				<input type="text" onChange={handleSearch} placeholder={"Search for food, coffee, etc.."} />
			</div>
		</header>
	);
};

export default Header;
