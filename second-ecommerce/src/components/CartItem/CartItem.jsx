import { useCartContext } from '../../Context/cartContext';

const CartItem = 
  
  ({product}) => {
  
      
      const {removeItem} = useCartContext();
      
  
  
    return (
      <div className='d-flex inline mb-5'>
          <img src={product.img} alt="" />
          <ul>

          <li>Nombre:{product.nombre}</li>
          <li>Precio:{product.precio}</li>
          <li>Cantidad:{product.cantidad}</li>
          <button className='btn btn-primary' onClick={()=> removeItem(product.id)}>Eliminar producto</button>


          </ul>
      </div>
      
    )
  }
  

export default CartItem