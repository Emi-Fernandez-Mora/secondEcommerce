import React from 'react';
import {Link} from 'react-router-dom';

function Item({prod}) {

  
  return (
    <>  
      <div className="card" style={{width: "18rem"}}>
                              <img src={prod.img} className="card-img-top" alt=""/>
                              <div className="card-body">
                                <h5 className="card-title">{`${prod.nombre} - ${prod.categoria}`}</h5>
                                <p className="card-text">{`Llevate tu ${prod.nombre}, te llega mañana`}</p>
                                
                                <Link to={`/detalle/${prod.id}`}>

                                    <button  className="btn btn-primary">Detalles </button>
                                </Link>
                              </div>
      </div>
    </>
  )
}

export default Item