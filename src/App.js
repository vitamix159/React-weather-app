import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <h3>Search Engine</h3>
        <Search />
        <p>
          <a href="https://github.com/vitamix159/SheCodesProject-Weather-app" target="_blank" rel="noreferrer">Open-source code</a> by Vitalija Ramonaitė
        </p>
      </header>
    </div>
  );
}

export default App;
