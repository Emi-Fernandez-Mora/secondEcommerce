import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'





export default function ItemListContainer({product}) {

  const [productAll, setproductAll] = useState([]);
  const  [productos, setProductos] = useState([]);
  const [bool, setBool] = useState(true);

  const { categoriaId }= useParams();
  const [loading, setLoading] = useState(true);



 

  useEffect(()=>{
      if(categoriaId){

              const db = getFirestore();
                const queryCollection = collection(db, 'productos');
                const queryCollectionFilter = query(queryCollection, where ('categoria','==',categoriaId) )
                getDocs(queryCollectionFilter)
                  .then(data =>setProductos(data.docs.map(item =>({id: item.id, ...item.data() }))))
                  .catch(err=>console.log(err))
      }
      else{
        

    const db = getFirestore();
    const queryCollection = collection(db, 'productos');
    getDocs(queryCollection)
      .then(data =>setProductos(data.docs.map(item =>({id: item.id, ...item.data() }))))
      .catch(err=>console.log(err))
        
      }
    
  },[categoriaId])

  
  return (
    <>
      {/* {loading ? <h2>Cargando</h2>: */}
      <ItemList productos={productos}/>
      
      
      
    </>
  )
}
