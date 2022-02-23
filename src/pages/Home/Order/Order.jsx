import React, {useEffect, useState} from 'react'
import OrderItems from './OrderItems/OrderItems';
import RadioButtons from './RadioButtons/radioButtons'

const Order = ({localStorageItems, deleteItem}) => {

   useEffect(() => {}, [

   ], [localStorageItems])

   return (
      <div className="order">
         <p>Order #342574</p>
         <RadioButtons />
         {/* Order items */}
         {
            localStorageItems && localStorageItems.map(item => {
               return <OrderItems deleteItem={deleteItem} img={item.img} name={item.name} price={item.price} key={item.id} id={item.id} />
            })
         }
      </div>
   )
}

export default Order