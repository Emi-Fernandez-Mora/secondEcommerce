import React, { useState } from 'react'
import BtnAgregar from '../BtnAgregar/BtnAgregar'
import BtnFinalizar from '../BtnFinalizar/BtnFinalizar'
import ItemCount from '../ItemCount.js/ItemCount'



const ItemDetail = ({ productos }) => {

    const [agrego, setAgrego] = useState(true)

    const handleAgregar = () =>{
      setAgrego(false)
    }
  
    
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                              <img src="" className="card-img-top" alt=""/>
                              <div className="card-body">
                                <h5 className="card-title">{`${productos.nombre} - ${productos.categoria}`}</h5>
                                <p className="card-text">{`Llevate tu ${productos.nombre}, te llega mañana`}</p>
                                <a href="#" className="btn btn-primary">ESTO ES EL DETALLE</a>
                              </div>
            </div>
            
            

            {
              agrego?
                <div>
                      <ItemCount stock ="10" initial = '1' />
                      <BtnAgregar handleAgregar={handleAgregar} />
                </div>
              :
              <BtnFinalizar />

            }
            
                
            

        
        </>

        
    )
}

export default ItemDetail