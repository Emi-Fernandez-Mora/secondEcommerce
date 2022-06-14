import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "../../components/ItemCount.js/ItemCount";
import ItemList from "../../components/ItemList/ItemList";



export default function ItemListContainer() {

  const [productos, setProductos] = useState([]);

  const getFetch = async () =>{
    try{
      const queryFetch = await fetch('stock.json');
      const queryFetchParse = await queryFetch.json();
      setProductos(queryFetchParse.Productos);
      

    }catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    setTimeout (()=>{
      getFetch();
      console.log('demora 2 segs')
    }, 1500)
    
    
    
  },[])

  
  return (
    <>
      <ItemList productos={productos}/>
      <ItemCount stock ="10" initial = '1' />
      
      
    </>
  )
}
