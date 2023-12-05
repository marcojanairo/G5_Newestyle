import React from 'react';

const Filter = ({ onFilterChange }) => {
  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  return (
    <div className="filter-container">
      <h2>Filter Options</h2>
      <div>
        <h3>Tops</h3>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('tops', 'Tshirts')}
          />
          T-shirts
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('tops', 'Jackets')}
          />
          Jackets
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('tops', 'Dresses')}
          />
          Dresses
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('tops', 'Blazers')}
          />
          Blazers or Hoodies
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('tops', 'Others')}
          />
          Others
        </label>
      </div>

      <div>
        <h3>Bottoms</h3>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('bottoms', 'Shorts')}
          />
          Shorts/Skirts
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('bottoms', 'Pants')}
          />
          Pants
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('bottoms', 'Leggings')}
          />
          Leggings
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('bottoms', 'Others')}
          />
          Others
        </label>
      </div>

      <div>
        <h3>Price Range</h3>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('price_range', '0-10')}
          />
          $0-10
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('price_range', '10-15')}
          />
          $10-15
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('price_range', '15-20')}
          />
          $15-20
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('price_range', '20-25')}
          />
          $20-25
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleFilterChange('price_range', '25+')}
          />
          $25+
        </label>
      </div>
    </div>
  );
};

export default Filter;
