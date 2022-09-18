import logo from './logo.svg';
import './App.css';

function BemVindo(props) {
  return <h1>Olá, {props.nome}</h1>
}

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <BemVindo nome='João'></BemVindo>
          <BemVindo nome='Maria'></BemVindo>
          <BemVindo nome='Ana'></BemVindo>
      </header>
        
    </div>
  );
}



export default App;
