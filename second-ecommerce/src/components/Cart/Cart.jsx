import React from 'react'
import { useCartContext } from '../../Context/cartContext'
import CartItem from '../CartItem/CartItem';



const Cart = () => {

    const { cart, vaciarCart } = useCartContext();
   
    console.log('cart:', cart)    
    
  return (

    <div>
    
        
       
           {  cart.map(product=>
                <CartItem key={product.id} product={product}/>
            )
        } 

       <div>
        <button onClick={vaciarCart}>
            Vaciar carrito
        </button>
       </div>
        
        
   
    </div>
  )
}

export default Cart