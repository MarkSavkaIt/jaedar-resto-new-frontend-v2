import React, { useEffect, useState } from "react";
import { DeleteSVG } from "../../../../assets/svg";

const OrderItems = ({ img, name, price, deleteItem, id }) => {
	const [inputCount, setInputCount] = useState(1);

	const inputCountValidator = (count) => {
		count >= 1 && count <= 40
			? setInputCount(count)
			: count > 40
				? setInputCount(40)
				: count < 1
					? setInputCount(1)
					: setInputCount(count);
	};

	return (
		<div className="items_grid">
			<img src={img} alt="logo" className="logo" />
			<div className="text">
				<p>{name}</p>
			</div>
			<input
				className="count"
				type="number"
				value={inputCount}
				onChange={(e) => {
					inputCountValidator(e.target.value);
				}}
			/>
			<p className="price">{price}</p>
			<input
				className="comment"
				type="text"
				placeholder="U can add a comment"
			/>
			<div className="delete" onClick={() => deleteItem(id)} >
				<DeleteSVG />
			</div>
		</div>
	);
};

export default OrderItems;
