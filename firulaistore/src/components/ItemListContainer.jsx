import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    fetch('/productos.json')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error cargando productos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando productos...</div>;

  return (
    <div>
      {greeting && <h2 style={{ textAlign: 'center', color: '#1b5e20' }}>{greeting}</h2>}
      <ItemList items={productos} />
    </div>
  );
};

export default ItemListContainer;