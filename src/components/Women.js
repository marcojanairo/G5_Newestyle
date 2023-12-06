import React, { useState } from 'react';
import Filter from './Filter';

function ClothingItem({id, name, gender, desc, image, addToCart}) {
  const imageStyle = {
    width: '250px',
    height: '250px',
  };

  const handleAddToCart = () => {
    addToCart({ id, name, gender, desc, image });
  };

  return (
    <div className="clothing-item">
      <h2>{name}</h2>
      <img src={image} alt={name} style={imageStyle} />      
      <p id="item-description">{desc}</p>      
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

const Men = ({ clothes, addToCart }) => {
  // Filter the prop clothes first based on gender 'male'
  const womenClothes = clothes.filter((item) => item.gender === 'female');
  const [filteredClothes, setFilteredClothes] = useState(womenClothes);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleFilterChange = (filterType, value) => {
    let updatedClothes = clothes;
  

    switch (filterType) {
      case 'tops':
        updatedClothes = clothes.filter((item) => item.tops.includes(value));
        break;
      case 'bottoms':
        updatedClothes = clothes.filter((item) => item.bottoms.includes(value));
        break;
      case 'price_range':
        updatedClothes = clothes.filter((item) => item.price_range === value);
        break;

      default:
        break;
    }
    
    setFilteredClothes(updatedClothes);
    setCurrentPage(1);
    
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClothes.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="page-container">
      <Filter onFilterChange={handleFilterChange} />
      <div className="container">
        {currentItems.map((clothing) => (
          <ClothingItem
          key={clothing.id}
          name={clothing.name}
          gender={clothing.gender}
          desc={clothing.desc}
          image={clothing.image}
          addToCart={addToCart}
          />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredClothes.length / itemsPerPage) }).map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>  
  );
};

export default Men;
