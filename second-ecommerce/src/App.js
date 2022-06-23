import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom' 


import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './containers/CartContainer/CartContainer';





function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route index path="/" element={<ItemListContainer />} />
        <Route index path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<CartContainer />}/>

        
        
        <Route path ="*" element={<Navigate to="/"/>} />
      </Routes>

      
    
    
    </BrowserRouter>
  );
}

export default App;
