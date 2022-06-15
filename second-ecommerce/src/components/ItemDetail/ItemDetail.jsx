import React from 'react'



const ItemDetail = ({ productos }) => {


    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                              <img src="" className="card-img-top" alt=""/>
                              <div className="card-body">
                                <h5 className="card-title">{`${productos.nombre} - ${productos.categoria}`}</h5>
                                <p className="card-text">{`Llevate tu ${productos.nombre}, te llega mañana`}</p>
                                <a href="#" className="btn btn-primary">Detalles del productos</a>
                              </div>
      </div>
        
        </>

        
    )
}

export default ItemDetail