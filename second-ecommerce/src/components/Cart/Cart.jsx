import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCartContext } from '../../Context/cartContext'
import CartItem from '../CartItem/CartItem';



const Cart = () => {
  const { id } = useParams();

  const { cart, vaciarCart, precioTotal } = useCartContext();

  



  return (

    <div>



      {cart.length === 0 ?
        <div>
          <h2>El carrito esta vacio</h2>
          <Link to="/">
            <button className='btn btn-secondary'>Ver todos los productos</button>

          </Link>
        </div> :
        <>

          {cart.map(product =>
            <CartItem key={product.id} product={product} />
          )}
          <div>
            <h3>Precio total <span>${precioTotal}</span></h3>

            <button onClick={vaciarCart}>
              Vaciar carrito
            </button>
            <Link to="/checkout">

              <button>
                Ir a pagar
              </button>
            </Link>
            
          </div>

        </>
      }





    </div>
  )
}

export default Cart