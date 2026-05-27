import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', padding: '1rem' }}>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;