import React, { useEffect, useState } from 'react'
import { DeleteSVG } from '../../../assets/svg';
import OrderItems from './OrderItems/OrderItems';
import RadioButtons from './RadioButtons/radioButtons'

const Order = () => {

   const localStorageItems = JSON.parse(localStorage.getItem("orderList")) || [];

   return (
      <div className="order">
         <p>Order #342574</p>
         <RadioButtons />
         {/* Order items */}
         {
            localStorageItems && localStorageItems.map(item => {
               return <OrderItems img={item.img} name={item.name} price={item.price} key={item.id} id={item.id} />
            })
         }
      </div>
   )
}

export default Order