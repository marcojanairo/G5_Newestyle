import React from 'react';

function ClothingItem(props) {
  const imageStyle = {
    width: '250px',
    height: '250px',
  };

  return (
    <div className="clothing-item">
      <h2>{props.name}</h2>
      <p>Gender: {props.gender}</p>
      <p>Item description: {props.desc}</p>
      <img src={props.url} alt={props.name} style={imageStyle} />
    </div>
  );
}

const Kids = ({ clothes }) => {
  // Filter clothes based on gender 'kids'
  const kidsClothes = clothes.filter((item) => item.gender === 'kids');

  return (
    <div className="container">
      {kidsClothes.map((clothing) => (
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
};

export default Kids;