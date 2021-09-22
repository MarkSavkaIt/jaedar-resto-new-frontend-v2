import React from "react";

const MenuItem = ({ name, price, count, img = "https://www.flaticon.com/svg/vstatic/svg/868/868753.svg?token=exp=1619440906~hmac=d867d45481785f41c9ee85595e6a00b7", id }) => {

	const writeToLocalStorage = () => {
		const localStorageItems = JSON.parse(localStorage.getItem("orderList"));
		if (localStorageItems) {
			if (localStorageItems.find((item) => item.id == id)) {
			} else {
				localStorageItems.push({
					id,
					name,
					price: "$" + (price || "0.00"),
					count,
					img,
				});
				localStorage.setItem("orderList", JSON.stringify(localStorageItems));
			}
		} else {
			localStorage.setItem("orderList", JSON.stringify([]));
			writeToLocalStorage();
		}
	};

	return (
		<div
			className="item"
			onClick={() => writeToLocalStorage()}
		>
			<img height="100px" width="100px" src={img} alt="item" />
			<div className="description">
				<p> {name || ""} </p>
				<p> {"$" + (price || "0.00")} </p>
				<p> {count || "0"} </p>
			</div>
		</div>
	);
};

export default MenuItem;
