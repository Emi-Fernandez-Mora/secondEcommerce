import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormContext } from '../../Context/formContext'
import Loading from '../Loading/Loading';


const TicketCompra = () => {

  const {ordenId, setPago} = useFormContext();
  const [loading, setLoading] = useState(true)
  setTimeout(()=>setLoading(false),1300)
  setTimeout(()=>setPago(false),15000) //timer para que cambie el pago a false y permita realizar otra compra, escucho sugerencias

  return (
    <>  

        {loading? <Loading/>:
        <div>

          <h1>Tu código de orden es: {ordenId}</h1>
          <Link to="/">
          
            <button className='btn btn-primary'>Volver al inicio</button>
          </Link>
      
        </div>}
    </>
  )
}


export default TicketCompra