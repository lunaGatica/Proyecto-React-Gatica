import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#0d4e5c',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>🐾 FirulaiStore</Link>
      <nav>
        <NavLink
          to="/productos"
          style={({ isActive }) => ({
            margin: '0 1rem',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#b9f6ca' : 'white',
            borderBottom: isActive ? '2px solid #b9f6ca' : 'none'
          })}
        >
          Productos
        </NavLink>
        <NavLink
          to="/carrito"
          style={({ isActive }) => ({
            margin: '0 1rem',
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#b9f6ca' : 'white',
            borderBottom: isActive ? '2px solid #b9f6ca' : 'none'
          })}
        >
          Carrito
        </NavLink>
      </nav>
      <CartWidget />
    </header>
  );
};

export default Header;