import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "../ItemCount.js/ItemCount";



export default function ItemListContainer() {

  const [productos, setProductos] = useState([]);

  const getFetch = async () =>{
    try{
      const queryFetch = await fetch('stock.json');
      const queryFetchParse = await queryFetch.json();
      setProductos(queryFetchParse.results);

    }catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    getFetch();
    
    
  },[])

  
  
  
 


  return (
    <>
      <ItemCount stock ="10" initial = '1' />

      {productos.map((e)=>(
        <h2 key={e.id}>{e.nombre}</h2>
      ))}

     
     
      

      
     
    </>
  )
}
