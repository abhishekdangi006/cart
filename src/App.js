import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import ItemContext from './itemContext';


function App() {
  
  return (
      <ItemContext>
      <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
        </div>
      </ItemContext>
  );
}
export default App;
