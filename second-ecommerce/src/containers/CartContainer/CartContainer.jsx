import React, { useState } from 'react'
import Cart from '../../components/Cart/Cart'
import Loading from '../../components/Loading/Loading'

const CartContainer = () => {

  const [loading, setLoading] = useState(true)
  setTimeout(()=>setLoading(false),1300)
  

  return (
    <>
            
         { loading? <Loading/>:  <Cart />
}
    </>
  )
}

export default CartContainer