import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Loading from "../../components/Loading/Loading";
import './ItemListContainer.css';





export default function ItemListContainer({ product }) {


  const [productos, setProductos] = useState([]);

  const { categoriaId } = useParams();

  const [loading, setLoading] = useState(true);





  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, 'productos');

    const queryCollectionFilter = categoriaId ? query(queryCollection, where('categoria', '==', categoriaId)): queryCollection
    
      getDocs(queryCollectionFilter)
      .then(data => setProductos(data.docs.map(item => ({ id: item.id, ...item.data() }))))
      .catch(err => console.log(err))
      .finally( 
        setTimeout(()=>setLoading(false),1300)
      )



  }, [categoriaId])


  return (
    <div className="container">
      {
        loading ? 
        <Loading/>:
        <ItemList productos={productos} />
      }



    </div>
  )
}
