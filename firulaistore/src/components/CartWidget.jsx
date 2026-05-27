import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useCart();
  return (
    <Link to="/carrito" style={{ position: 'relative', fontSize: '1.8rem' }}>
      🛒
      {totalQuantity > 0 && (
        <span style={{
          position: 'absolute',
          top: '-12px',
          right: '-18px',
          background: '#e67e22',
          borderRadius: '50%',
          padding: '2px 8px',
          color: 'white',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>{totalQuantity}</span>
      )}
    </Link>
  );
};

export default CartWidget;