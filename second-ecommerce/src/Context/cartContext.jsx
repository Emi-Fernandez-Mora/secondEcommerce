
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    
    const removeItem = (id) =>{
        
        const items = cart.filter((e)=>e.id !== id);

             

        setCart(items);
        
        

    }
    

    const isInCart = (id) =>{

        return cart.find((i)=>i.id === id);

    }

    const addToCart =(item)=>{
        
        
      
       if(isInCart(item.id)) {
            
           const obj = cart.find((i)=>i.id === item.id);
           obj.cantidad += item.cantidad;
                                  
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
         vaciarCart,
         removeItem
         
        }}
    >

        {children}

    </CartContext.Provider>
  )
}

