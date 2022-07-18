import './ItemCount.css';
import { useState } from 'react';


export default function ItemCount({ stock, initial, onAdd }) {

  const [count, setCount] = useState(parseInt(initial));

  const agregar = () => {
    count == stock ? alert('No hay mas stock') : setCount(count + 1)
  }
  const restar = () => {
    count <= initial ? alert('No puedes eliminar mas productos') : setCount(count - 1)
  }
  const handlerAdd = () => {
    onAdd(count);

  }




  return (
    <>
      <div className='containerContador'>
        <div className='contador'>
          <button onClick={restar} id='btnMenos' className="menos"><ion-icon name="remove-outline"></ion-icon></button>
          <p className='numero'>{count}</p>
          <button onClick={agregar} id='btnMas' className="mas"><ion-icon name="add-outline"></ion-icon></button>
        </div>
      </div>
      <button className="btn btn-primary"
        onClick={handlerAdd} >    

        Agregar al carrito

      </button>

    </>
  )
}
