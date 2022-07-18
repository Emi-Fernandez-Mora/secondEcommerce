import React from 'react'
import { useState } from 'react'
import Form from '../../components/Form/Form'
import TicketCompra from '../../components/TicketCompra/TicketCompra'
import { useFormContext } from '../../Context/formContext'

const FormularioContainer = () => {

    const {pago} = useFormContext();
  
  return (

    <> 
     {pago?<TicketCompra/>:
        <Form />}
        
     </>
  )
}

export default FormularioContainer