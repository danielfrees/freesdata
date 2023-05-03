import logo from './art/freesdata_logo.svg';
import './App.css';
import TabsComponent from './Tabs';


function App() {
  return (
    <div className="App">
      <TabsComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Daniel Frees' website. 
          His AI minions are currently hard at work building the most beautiful page you've ever seen.
          Beta version will be live 06/01/2023.
        </p>
      </header>
    </div>
  );
}

export default App;
