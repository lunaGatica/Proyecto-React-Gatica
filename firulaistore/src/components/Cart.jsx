import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>🛒 Tu carrito está vacío</h2>
        <Link to="/productos"><button style={{ marginTop: '1rem' }}>Ver productos</button></Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
      <h2 style={{ color: '#0d4e5c' }}>Tu carrito</h2>
      {cartItems.map(item => (
        <div key={item.id} style={{
          borderBottom: '1px solid #b2dfdb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          flexWrap: 'wrap'
        }}>
          <img src={item.imagen} alt={item.nombre} style={{ width: '60px', borderRadius: '10px' }} />
          <div style={{ flex: 2, marginLeft: '1rem' }}>
            <h4>{item.nombre}</h4>
            <p>Cantidad: {item.quantity} - ${item.precio * item.quantity}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)} style={{ backgroundColor: '#e67e22' }}>Eliminar</button>
        </div>
      ))}
      <div style={{ marginTop: '2rem', textAlign: 'right' }}>
        <h3>Total: ${totalPrice}</h3>
        <button onClick={clearCart} style={{ marginRight: '1rem', backgroundColor: '#607d8b' }}>Vaciar carrito</button>
        <button>Finalizar compra</button>
      </div>
    </div>
  );
};

export default Cart;