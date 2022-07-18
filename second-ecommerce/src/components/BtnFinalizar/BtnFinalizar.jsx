import React, { memo } from 'react'
import { Link } from 'react-router-dom'




const BtnFinalizar = () => {




  return (

    <div className='d-flex'>
      <Link to="/">
        <button className='btn btn-secondary'>Seguir comprando</button>

      </Link>

      <Link to="/carrito">
        <button className='btn btn-primary me-1'>Finalizar compra</button>
      </Link>
    </div>

  )
}


export default BtnFinalizar