import React from 'react'

function Item({prod}) {
  return (
    <>  
      <div className="card" style={{width: "18rem"}}>
                              <img src="" className="card-img-top" alt=""/>
                              <div className="card-body">
                                <h5 className="card-title">{`${prod.nombre} - ${prod.categoria}`}</h5>
                                <p className="card-text">{`Llevate tu ${prod.nombre}, te llega mañana`}</p>
                                <a href="#" className="btn btn-primary">Detalles del producto</a>
                              </div>
      </div>
    </>
  )
}

export default Item