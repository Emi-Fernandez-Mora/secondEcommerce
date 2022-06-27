import React from 'react'
import { useCartContext } from '../../Context/cartContext'


const Cart = () => {

    const { cart, vaciarCart } = useCartContext();
    console.log(cart)
    
    
  return (

    <div>
    
        
       
          {  cart.map(i=>
                <li key={i.id}>{i.nombre} {i.precio} {i.cantidad}</li>
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