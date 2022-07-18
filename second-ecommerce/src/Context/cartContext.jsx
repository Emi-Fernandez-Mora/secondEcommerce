
import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [canti, setCanti] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0)


    const removeItem = (id) => {

        const items = cart.filter((e) => e.id !== id);
        setCart(items);
    }

    const actualizar = () =>{
        const totalCant = cart.reduce((acc, actual) => acc + actual.cantidad, 0)
        setCanti(totalCant);

        const total = cart.reduce((acc, actual) => acc + actual.precio, 0);
        setPrecioTotal(total);

    }

    useEffect(() => {
        actualizar();

    }, [cart])

    

    

    const addToCart = (item) => {
              
        
        if (cart.find((i)=>i.id === item.id)) {
            

            const obj = cart.find((i) => i.id === item.id);
            obj.cantidad += item.cantidad;
            obj.precio += item.precio * item.cantidad;
            actualizar()
            console.log('cantidad:',obj.cantidad, 'preico', obj.precio)
            


        }
        else {

            setCart([...cart, item]);

            item.precio = item.precio * item.cantidad;
            actualizar();
            

        }

    }

    const vaciarCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider
            value={
                {
                    cart,
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

