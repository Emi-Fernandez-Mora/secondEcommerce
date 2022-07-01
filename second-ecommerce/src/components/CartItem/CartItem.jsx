import React, { memo } from 'react'
import { useCartContext } from '../../Context/cartContext';

const CartItem = 
  
  ({product}) => {
  
      
      const {removeItem} = useCartContext();
      
  
  
    return (
      <ul>
        
          <li>Nombre:{product.nombre}</li>
          <li>Precio:{product.precio}</li>
          <li>Cantidad:{product.cantidad}</li>
          <button className='btn btn-primary' onClick={()=> removeItem(product.id)}>Eliminar producto</button>
  
  
      </ul>
    )
  }
  

export default CartItem