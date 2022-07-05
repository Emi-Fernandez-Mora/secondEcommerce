import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";
import { useParams} from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

  

  const  [productos, setProductos] = useState([]); 
  const [bool, setBool] = useState(true); 
  const { id } = useParams();      
  
  const [loading, setLoading] = useState(true)

useEffect(()=>{ 

    const db = getFirestore();
    const queryItem = doc(db, 'productos', 'pydrP9136Gqir8TJSgC8');
    getDoc(queryItem)
      .then(resp=>setProductos({id: resp.id, ...resp.data}))
      .catch(err=>console.log(err))
      

  },[bool])
  


  // useEffect(()=>{
    
  //     getFetch(id).then((res)=>
  //       setProductos(res)
  //     )
  //     .catch(console.log('error'))
  //     .finally(()=>setLoading(false))
     
      
    
  // },[])

  return (
    <>
      {
        loading ? <h2>Cargando</h2>:
      <ItemDetail productos={productos} />
      }

    </>
  )
}

export default ItemDetailContainer