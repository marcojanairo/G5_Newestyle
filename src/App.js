import './App.css';
import clothes from './clothesData.js'; // import data file

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
        <div className="center-container">
          <img src="./logo_Newestyle.png" alt="logo_Newestyle" 
          style={{ width: '100px', height: '100px' }}  />
        </div>
        <h1>Welcome to Newestyle</h1>
        <div className="button-container">
        <button >T-Shirts</button><button>Jackets</button><button>Pants</button>
        </div>
      </header>
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
    </div>
  );

}

export default App;
