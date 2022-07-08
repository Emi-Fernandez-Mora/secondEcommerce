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

  const [ordenId, setOrdenId] = useState('');
  

  async function generarOrden(e) {
    e.preventDefault();
    let orden = {};

      let nombre = (document.querySelector('#inputNombre').value)
      let mail = (document.querySelector('#inputEmail').value)
      let telefono = (document.querySelector('#inputTelefono').value)
      
    orden.buyer = { name: nombre, email: mail, tel: telefono }
    orden.precio = precioTotal;
    console.log('buyer',nombre,mail,telefono)
    
    orden.items = cart.map(cartItem => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * cartItem.cantidad

      return { id, nombre, precio }
    })

    

    const db = getFirestore();
    const orderCollection = collection(db, 'ordenes');
    addDoc(orderCollection, orden)
      .then(resp => setOrdenId(resp.id))

    const queryCollectionStock = collection(db, 'productos');
    const queryActualizarStock = await query(
      queryCollectionStock,
      where(documentId(), 'in', cart.map(it => it.id))
    );
    const batch = writeBatch(db)

    await getDocs(queryActualizarStock)
      .then(resp => resp.docs.forEach(resp => batch.update(resp.ref, {
        stock: resp.data().stock - cart.find(item => item.id === resp.id).cantidad
      })))
      .finally(() => console.log('entro'))
    batch.commit()

  }
  



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
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre completo</label>
                <input type="email" className="form-control" id="inputNombre" aria-describedby="emailHelp"/>
                  
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Telefono</label>
                <input type="email" className="form-control" id="inputTelefono"/>
              </div>
              {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            </form>
            <button onClick={vaciarCart}>
              Vaciar carrito
            </button>
            <button onClick={generarOrden}>
              Ir a pagar
            </button>
          </div>
          <h1> El nro de orden es {ordenId}</h1>
        </>
      }





    </div>
  )
}

export default Cart