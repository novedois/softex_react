import logo from './logo.svg';
import './App.css';

function Hora() {
  return (
    <div>
      <p>Hoje é {new Date().toLocaleDateString()}</p>
      <p>São {new Date().toLocaleTimeString()}</p>
    </div>
  )
}

function BemVindo(props) {
  return (
    <div>
      <h1>Olá, {props.nome}</h1>
      <p>Você tem {props.idade} anos!</p>
    </div>
  );
}

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Hora></Hora>
          <BemVindo nome='João' idade='22'></BemVindo>
          <BemVindo nome='Maria' idade='55'></BemVindo>
          <BemVindo nome='Ana' idade='93'></BemVindo>
      </header>
        
    </div>
  );
}



export default App;
