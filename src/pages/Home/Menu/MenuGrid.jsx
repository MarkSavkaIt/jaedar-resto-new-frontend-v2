import React, { useEffect, useState } from "react";
import { ArrowSVG } from "../../../assets/svg";
import MenuItem from "./MenuItem";
import fetchMenuItems from "../../../services/fetchMenuItems";

const MenuGrid = ({addItemToStorage, fade, category, changeFade, search }) => {
	const [items, setItems] = useState(undefined);
	const style = "menu_grid_items";

	useEffect(() => {
		async function getItems() {
			setItems(await fetchMenuItems());
			changeFade("fade_in");
		}
		getItems();

	}, [changeFade, fade]);

	return (
		<div className="menu_grid">
			<div className="menu_top">
				<p>Вибирайте страви</p>
				{/* <button>
					<ArrowSVG width="20px" height="10px" fill="white" />
					Dine in
				</button> */}
			</div>
			<div className={style + " " + fade}>
				{items &&
					items.map((item) => {
						return item.category.map((categoryFilter) => {
							if (categoryFilter === category) {
								if(item.name.toLowerCase().includes(search.toLowerCase())){
									return (
										<MenuItem
											id={item.id}
											name={item.name}
											price={item.price}
											count={item.count}
											img={item.img}
											addItemToStorage={addItemToStorage}
										/>
									);
								}
							}
						});
					})
				}
				{items 
					? items.filter(item => 
						item.category.includes(category)
					).length === 0
						? <p>Ця категорія не містить страв</p>
						: items.filter(item => 
							item.name.toLowerCase().includes(search.toLowerCase())
						).length === 0 
						? <p>Ваш пошук не дав результатів</p> : null
					: null
				}
			</div>
			<div>
				{!items && <p className="empty_menu">Наразі меню пусте</p>}
			</div>
		</div>
	);
};

export default MenuGrid;
