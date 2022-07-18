import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";


import './CartWidget.css'


export default function CartWidget() {
  const { canti } = useCartContext();
  return (
    
   <>
    
    <span className={canti === 0 ? 'none' : ''}>{canti}</span>
    <Link to="/carrito">
    <button className='btn btn-secondary'><ion-icon className="pe-3" name="cart-outline"></ion-icon></button>
    </Link>
    
    
   </>
   )
}
