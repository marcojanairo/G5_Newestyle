import React, { Component } from 'react';
import clothes from '../data/clothesData.js'; // import data file


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

class Home extends Component {    
  
  render() {
    return (
    <div className="container">
      {clothes.map((clothing) => (
        <ClothingItem
          key={clothing.id}
          name={clothing.name}
          gender={clothing.gender}
          desc={clothing.desc}
          url={clothing.url}
        />
      ))}
      </div>
    );
  }
}

export default Home;