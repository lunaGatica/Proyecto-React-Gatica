import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div style={{
      border: '1px solid #80cbc4',
      borderRadius: '20px',
      padding: '1rem',
      width: '250px',
      backgroundColor: 'white',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s'
    }}>
      <img src={item.imagen} alt={item.nombre} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '15px' }} />
      <h3 style={{ margin: '0.8rem 0 0.5rem', color: '#0d4e5c' }}>{item.nombre}</h3>
      <p style={{ fontWeight: 'bold', color: '#2e7d64' }}>${item.precio}</p>
      <Link to={`/producto/${item.id}`}>
        <button style={{ marginTop: '0.5rem' }}>Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;