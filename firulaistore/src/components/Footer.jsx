const Footer = () => {
  const team = [
    { name: 'Romina Sanchez', role: 'Atención al Cliente', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Juliana Menes', role: 'Cajera', image: 'https://randomuser.me/api/portraits/women/32.jpg' },
    { name: 'Cecilia Roman', role: 'Dueña del Negocio', image: 'https://randomuser.me/api/portraits/women/90.jpg' },
  ];

  return (
    <footer style={{
      backgroundColor: '#0d4e5c',
      color: '#e0f2f1',
      padding: '2rem 1rem',
      marginTop: '3rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <p>📍 Av. Firulai 123, Buenos Aires - 📧 contacto@firulaistore.com - 📞 +54 11 1234-5678</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          {team.map((member, idx) => (
            <div key={idx} style={{ textAlign: 'center', background: '#1f6d7a', padding: '1rem', borderRadius: '20px', width: '180px' }}>
              <img src={member.image} alt={member.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #b9f6ca' }} />
              <h4 style={{ margin: '0.5rem 0', color: '#b9f6ca' }}>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '0.8rem' }}>&copy; 2025 FirulaiStore - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;