import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";
import { useParams} from "react-router-dom"

const ItemDetailContainer = () => {

  

  const  [productos, setProductos] = useState([]);  
  const { id } = useParams();      
  
  

  useEffect(()=>{
    
      getFetch(id).then((res)=>
        setProductos(res)
      )
      .catch(console.log('error'))
     
      console.log(productos)
    
  },[])

  return (
    <>
      <ItemDetail productos={productos} />

    </>
  )
}

export default ItemDetailContainer