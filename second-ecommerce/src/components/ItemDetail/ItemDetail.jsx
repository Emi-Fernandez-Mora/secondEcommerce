import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/cartContext'

import BtnFinalizar from '../BtnFinalizar/BtnFinalizar'
import ItemCount from '../ItemCount.js/ItemCount'




const ItemDetail = ({ productos }) => {

    const { cart ,addToCart }= useContext(CartContext)
    const [agrego, setAgrego] = useState(true)


    //maneja item detail y recibe el count
    const onAdd = (count) =>{
      setAgrego(false);      
      
      addToCart({...productos, cantidad:count});
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
              agrego ?
                      <ItemCount stock ="10" initial = '1' onAdd={onAdd} />
                    :
                      <BtnFinalizar />

            }
            
                
            

        
        </>

        
    )
}

export default ItemDetail