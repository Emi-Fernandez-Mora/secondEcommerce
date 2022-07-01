import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";






export default function ItemListContainer({products}) {

  const  [productos, setProductos] = useState([]);

  const { categoriaId }= useParams()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(categoriaId){

      getFetch().then((res)=>{
        /* setProductos(res.filter(productos.categoria === categoriaId)) */
        setProductos(res.filter( productos => productos.categoria === categoriaId))
        
      })
      .catch(console.log('error'))
    }
    else{
      
        getFetch().then((res)=>{
          setProductos(res)
        })
        .catch(console.log('error'))
        .finally(()=>setLoading(false))
       
    }
    
  },[categoriaId])

  
  return (
    <>
      {loading ? <h2>Cargando</h2>:
      <ItemList productos={productos}/>}
      
      
      
    </>
  )
}
