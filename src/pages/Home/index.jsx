import React, { useContext, useEffect, useState } from "react";
import MenuPage from "./Menu/MenuPage";
import Order from "./Order/Order";

const MyContext = React.createContext(false);

const Home = () => {
  const [localStorageItems, setLocalStorageItems] = useState(
    JSON.parse(localStorage.getItem("orderList")) || []
  );
  const [modal, setModal] = useState(false);

  const addItemToStorage = () => {
    setLocalStorageItems(JSON.parse(localStorage.getItem("orderList")));
  };
  const deleteItem = (id) => {
    const temp = [];
    localStorageItems.map((item) => {
      if (item.id !== id) temp.push(item);
    });
    localStorage.setItem("orderList", JSON.stringify(temp));
    setLocalStorageItems(temp);
  };

  return (
    <div className='home'>
      <MenuPage addItemToStorage={addItemToStorage} />
      <Order
        setModal={setModal}
        localStorageItems={localStorageItems}
        deleteItem={deleteItem}
      />
      {modal && (
        <div onClick={() => setModal(false)} className='modal'>
          <div className='text_block'>Ваше замовлення вже готується !</div>
        </div>
      )}
    </div>
  );
};

export default Home;
