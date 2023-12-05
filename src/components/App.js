import '../css/index.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import About from './About';
import clothesData from '../data/clothesData.js';

function App() {
  const [filteredClothes, setFilteredClothes] = useState(clothesData);  
  const [cart, setCart] = useState([]);

  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    const filteredItems = clothesData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClothes(filteredItems);
  };

  const addToCart = (item) => {
    if (item === 'CLEAR_CART') {
      setCart([]);
    } else {
      setCart([...cart, item]);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <Header onSearch={handleSearch} cartSize={cart.length} addToCart={addToCart} />
        <Routes>
          <Route
            path="/"
            element={<Home clothes={filteredClothes} addToCart={addToCart}/>}
          />
          <Route path="/Men" element={<Men clothes={filteredClothes} addToCart={addToCart} />} />
          <Route path="/Women" element={<Women clothes={filteredClothes} addToCart={addToCart} />} />
          <Route path="/Kids" element={<Kids clothes={filteredClothes} addToCart={addToCart} />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;