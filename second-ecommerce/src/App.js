import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';






function App() {
  return (
    <>
      
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      
    
    
    </>
  );
}

export default App;
