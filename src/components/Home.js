import React, { useState } from 'react';
import Filter from './Filter';

function ClothingItem({ id, name, gender, desc, url, addToCart }) {
  const imageStyle = {
    width: '250px',
    height: '250px',
  };

  const handleAddToCart = () => {
    addToCart({ id, name, gender, desc, url });
  };

  return (
    <div className="clothing-item">
      <h2>{name}</h2>
      <p>Gender: {gender}</p>
      <p>Item description: {desc}</p>
      <img src={url} alt={name} style={imageStyle} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

const Home = ({ clothes, addToCart }) => {
  const [filteredClothes, setFilteredClothes] = useState(clothes);

  const handleFilterChange = (filterType, value) => {
    let updatedClothes = clothes;

    switch (filterType) {
      case 'tops':
        updatedClothes = clothes.filter((item) => item.tops.includes(value));
        break;
      case 'bottoms':
        updatedClothes = clothes.filter((item) => item.bottoms.includes(value));
        break;
      case 'price':
        updatedClothes = clothes.filter((item) => item.price === value);
        break;

      default:
        break;
    }

    setFilteredClothes(updatedClothes);
  };

  return (
    <div className="page-container">
      <Filter onFilterChange={handleFilterChange} />
      <div className="container">
        {filteredClothes.map((clothing) => (
          <ClothingItem
            key={clothing.id}
            id={clothing.id}
            name={clothing.name}
            gender={clothing.gender}
            desc={clothing.desc}
            url={clothing.url}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
