import React from 'react'

const BtnAgregar = ({handleAgregar}) => {
  return (
    <>
        <button className="btn btn-primary"
            onClick={handleAgregar}

        >

                Agregar al carrito

        </button>
    </>
        
  )
}

export default BtnAgregar