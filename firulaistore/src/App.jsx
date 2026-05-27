import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="🐾 ¡Bienvenido a FirulaiStore! 🐾" />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;