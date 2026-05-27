import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();

  const handleAgregar = () => {
    addToCart(producto, cantidad);
    alert('¡Producto agregado al carrito!');
  };

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '30px',
      maxWidth: '900px',
      margin: 'auto',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
    }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', borderRadius: '20px', objectFit: 'cover' }} />
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#0d4e5c' }}>{producto.nombre}</h2>
        <p style={{ margin: '1rem 0' }}>{producto.descripcion}</p>
        <h3 style={{ color: '#2e7d64' }}>${producto.precio}</h3>
        <div style={{ margin: '1rem 0' }}>
          <button onClick={() => setCantidad(prev => Math.max(1, prev - 1))}>-</button>
          <span style={{ margin: '0 1rem', fontSize: '1.2rem' }}>{cantidad}</span>
          <button onClick={() => setCantidad(prev => prev + 1)}>+</button>
        </div>
        <button onClick={handleAgregar} style={{ marginRight: '1rem' }}>Agregar al carrito</button>
        <Link to="/productos"><button style={{ backgroundColor: '#607d8b' }}>Seguir comprando</button></Link>
      </div>
    </div>
  );
};

export default ItemDetail;