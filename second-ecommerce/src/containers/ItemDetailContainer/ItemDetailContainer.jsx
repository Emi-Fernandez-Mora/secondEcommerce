import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";
const ItemDetailContainer = ({products}) => {

    const [productos, setProductos] = useState([])

    /* useEffect(()=>{
      getFetch(1).then((res)=>{
        setProducto(res)
      })
      console.log(producto)
    },[producto]) */

    useEffect(()=>{
      getFetch(1).then((res)=>{
        setProductos(res)
      })
      
    },[productos])
    
  return (
    <>
      <ItemDetail productos={productos} />

    </>
  )
}

export default ItemDetailContainer