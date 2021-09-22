import React, { useState } from "react";

const MenuFilter = (props) => {
	const [status, setStatus] = useState("status_line_child status_1");

	return (
		<div className="menu_list">
			<ul>
				<li
					onClick={() => {
						setStatus("status_line_child status_1");
						props.changeCategory("hot");
					}}
				>
					Hot Dishes
				</li>
				<li
					onClick={() => {
						setStatus("status_line_child status_2");
						props.changeCategory("cold");
					}}
				>
					Cold Dishes
				</li>
				<li
					onClick={() => {
						setStatus("status_line_child status_3");
						props.changeCategory("soup");
					}}
				>
					Soup
				</li>
				<li
					onClick={() => {
						setStatus("status_line_child status_4");
						props.changeCategory("grill");
					}}
				>
					Grill
				</li>
				<li
					onClick={() => {
						setStatus("status_line_child status_5");
						props.changeCategory("appetizer");
					}}
				>
					Appetizer
				</li>
				<li
					onClick={() => {
						setStatus("status_line_child status_6");
						props.changeCategory("dessert");
					}}
				>
					Dessert
				</li>
			</ul>
			<div className="status_line_parent">
				<div className={status}></div>
			</div>
		</div>
	);
};

export default MenuFilter;
