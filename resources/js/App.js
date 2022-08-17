import logo from './logo.svg';
import laravelLogo from './laravel.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <img src={laravelLogo} alt="laravel-logo" />
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Laravel v9.25.1 with React JS Scaffolding using Laravel Mix
        </p>
        
      </header>
    </div>
  );
}

export default App;
