import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "../../components/ItemCount.js/ItemCount";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";






export default function ItemListContainer({products}) {

  const  [productos, setProductos] = useState([]);

  useEffect(()=>{
    getFetch().then((res)=>{
      setProductos(res)
    })
    console.log(productos)
  },[productos])

  
  return (
    <>
      <ItemList productos={productos}/>
      <ItemCount stock ="10" initial = '1' />
      
      
    </>
  )
}
