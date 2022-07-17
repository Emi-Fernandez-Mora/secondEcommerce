import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams} from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

  

  const  [productos, setProductos] = useState([]); 
  const [bool, setBool] = useState(true); 
  const { id } = useParams();      
  
  const [loading, setLoading] = useState(true)

useEffect(()=>{ 

    const db = getFirestore();
    const queryItem = doc(db, 'productos', id);

    if(id){

      getDoc(queryItem)
        
        .then(resp=>setProductos({id: resp.id, ...resp.data()}))
        .catch(err=>console.log(err))
        
    }

  },[bool])
  


  

  return (
    <>
      {/* {
        loading ? <h2>Cargando</h2>: */}
      <ItemDetail productos={productos} />
      

    </>
  )
}

export default ItemDetailContainer