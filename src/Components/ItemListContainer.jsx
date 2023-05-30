import React, { useEffect, useState } from 'react';
import { getItems } from '../async-mocks/productsData';
import './ItemListContainer.css';
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Catálogo de productos</h2>
      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list">
          {items.map((item) => (
            <ItemDetailContainer key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
