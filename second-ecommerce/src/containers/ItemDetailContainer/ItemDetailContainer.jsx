import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";
import { useParams} from "react-router-dom"

const ItemDetailContainer = () => {

  

  const  [productos, setProductos] = useState([]);  
  const { id } = useParams();      
  
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    
      getFetch(id).then((res)=>
        setProductos(res)
      )
      .catch(console.log('error'))
      .finally(()=>setLoading(false))
     
      
    
  },[])

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