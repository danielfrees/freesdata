import logo from './headshot.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Daniel Frees' website. 
          His AI minions are currently hard at work building the most beautiful page you've ever seen.
          Beta version will be live 03/01/2023.
        </p>
      </header>
    </div>
  );
}

export default App;
