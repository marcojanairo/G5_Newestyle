import '../css/App.css';
import clothes from '../data/clothesData.js'; // import data file
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './Header';
import Jackets from './Jackets';
import Pants from './Pants';
import Tshirts from './Tshirts';

function ClothingItem(props) {

  const imageStyle = {
    width: '250px',
    height: '250px',
  }
  
  return (
    <div className="clothing-item">
      <h2>{props.name}</h2>
      <p>Gender: {props.gender}</p>
      <p>Item description: {props.desc}</p>
      <img src={props.url} alt={props.name} style={imageStyle}/>
    </div>
  )
}  
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Jackets" element={<Jackets title="Jackets" />} />
        <Route path="/Pants" element={<Pants />} />
        <Route path="/Tshirts" element={<Tshirts />}>
          {/* Write routes here... */}
          {/* <Route index element={<Navigate replace to="html" />} />
          <Route path="/courses/html" element={<HTML />} />
          <Route path="/courses/css" element={<CSS />} />
          <Route path="/courses/javascript" element={<JavaScript />} /> */}
        </Route>
      </Routes>
        <div className="center-container">
          <img src="./logo_Newestyle.png" alt="logo_Newestyle" 
          style={{ width: '100px', height: '100px' }}  />
        </div>
        <h1>Welcome to Newestyle</h1>
        <div className="button-container">
        <button >T-Shirts</button><button>Jackets</button><button>Pants</button>
        </div>
      </header>
      
    </div>
  );

}

export default App;
