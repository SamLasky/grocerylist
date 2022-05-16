import './App.css';
import Searchbar from '../components/Searchbar';
import Checkbox from '../components/Checkbox';
import ListItem from '../components/ListItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery Checklist</h1>
        <p>
          This is where a searchbar will go!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
