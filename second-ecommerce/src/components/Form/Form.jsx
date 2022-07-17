import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore';
import React from 'react'
import { useCartContext } from '../../Context/cartContext';
import { useState } from 'react';


const Form = ({siPago}) => {

    const { cart, precioTotal } = useCartContext();
    const [ordenId, setOrdenId] = useState('');
    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    
    
     const handlerPago =  async () =>{
      siPago(true)
    }
    

    async function generarOrden(e,) {
        console.log('entro esta')
        e.preventDefault();
        let orden = {};
        
        
        
          
        orden.buyer = { name: nombre, email: mail, tel: telefono }
        orden.precio = precioTotal;
                
        orden.items = cart.map(cartItem => {
          const id = cartItem.id;
          const nombre = cartItem.nombre;
          const precio = cartItem.precio 
    
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

     const llamarTodos =(e)=>{
      generarOrden(e);
      handlerPago()
     }



  return (
    <>
          <form>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Nombre completo</label>
                  <input type="text" className="form-control" id="inputNombre" aria-describedby="emailHelp"
                  value={nombre} onChange={((e)=>setNombre(e.target.value))} />

              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail" value={mail} onChange={((e)=>setMail(e.target.value))} />
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Telefono</label>
                  <input type="text" className="form-control" id="inputTelefono" value={telefono} onChange={((e)=>setTelefono(e.target.value))} />
              </div>
              
              <button onClick={llamarTodos}>Pagar  </button>
          </form>

          <h1>Tu ID del pedido es {ordenId}</h1>
          
      </>
  )
}

export default Form