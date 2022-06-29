import React from 'react'
import { useCartContext } from '../../Context/cartContext';

const CartItem = ({product}) => {

    
    const {removeItem} = useCartContext();
    console.log('cartItem:'+ product)


  return (
    <div>
      
        <div>{product.nombre}</div>
        <div>{product.precio}</div>
        <div>{product.cantidad}</div>
        <button className='btn btn-primary' onClick={()=> removeItem(product.id)}>Eliminar producto</button>


    </div>
  )
}

export default CartItem