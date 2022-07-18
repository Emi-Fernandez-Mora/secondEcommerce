import React, { createContext, useState } from 'react'
import { useContext } from 'react';
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore';


import { useCartContext } from './cartContext';

export const FormContext = createContext([]);
export const useFormContext = () => useContext(FormContext)

export const FormContextProvider = ({children}) => {

    const { cart, precioTotal,vaciarCart } = useCartContext();
    const [ordenId, setOrdenId] = useState('');
    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pago, setPago] = useState(false);
    

    async function generarOrden(e) {
        
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
          .finally(()  => setPago(true))
        batch.commit()
        
        vaciarCart();
        
      }

     

  return (
    <FormContext.Provider
        value={{
            generarOrden,
            setTelefono,
            setMail,
            setNombre,
            ordenId,
            nombre,
            mail,
            telefono,
            pago,
            setPago
            


        }}
    
    >

        {children}
    </FormContext.Provider>
  )
}

