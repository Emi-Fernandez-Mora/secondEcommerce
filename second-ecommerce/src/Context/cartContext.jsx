
import React from 'react'
import { useContext } from 'react';
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    

    const addToCart =(item)=>{
        
        let encontro = cart.find((i)=>i.id===item.id);

       if(encontro) {

            let cantidadTotal = encontro.cantidad + item.cantidad;
            setCart([...cart, encontro.cantidad = cantidadTotal])

           
       }
       else{

           setCart([...cart, item])

       } 
       
        
    }
    
    
    const vaciarCart = () => {
        setCart([])
    }


  return (
    <CartContext.Provider 
    value={
        {cart,
        addToCart,
         vaciarCart
         
        }}
    >

        {children}

    </CartContext.Provider>
  )
}

