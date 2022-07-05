
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    const [canti, setCanti] = useState(0);
    const [precioTotal , setPrecioTotal] = useState(0)
    

    
    const removeItem = (id) =>{
        
        const items = cart.filter((e)=>e.id !== id);
        setCart(items);
    }
    

    const isInCart = (id) =>{

        cart.some((i)=>i.id == id);
        console.log('id',id)

    }

    useEffect(()=>{
        const total = cart.reduce((acc, actual)=> acc + actual.precio,0);
        setPrecioTotal(total);

        
        
    },[cart])

    useEffect(()=>{
        const totalCant = cart.reduce((acc,actual)=>acc + actual.cantidad,0)
        setCanti(totalCant);
        console.log('cant:',canti)
    },[cart])
    
    
    const addToCart =(item)=>{
            console.log('item.id',item.id)
       if(isInCart(item.id)) {
            
           const obj = cart.find((i)=>i.id === item.id);
           obj.cantidad += item.cantidad;
           obj.precio += item.precio;
           
                                  
       }
        else{
           setCart([...cart, item]);
           
           item.precio = item.precio * item.cantidad;

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
         removeItem,
        precioTotal,
        canti,

         
        }}
    >

        {children}

    </CartContext.Provider>
  )
}

