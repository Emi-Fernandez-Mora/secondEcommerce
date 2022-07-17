import React from 'react'
import { useState } from 'react'
import Form from '../../components/Form/Form'

const FormularioContainer = () => {

    const [pago,setPago] = useState(false);

    const siPago = (value) =>{
        setPago(value)
    }

   
   
     
  return (
    <>  {pago?<h1>Entro papaaaa</h1>:
        <Form siPago={siPago}/>}
        
     </>
  )
}

export default FormularioContainer