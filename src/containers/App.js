import './App.css';
import Searchbar from '../components/Searchbar';
import Checkbox from '../components/Checkbox';
import ListItem from '../components/ListItem';
import Data from "../mock-data.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery Checklist</h1>
      </header>

    </div>

export default function App (){
  return {
    <div>
      <input placeholder="Enter Post Title"/>
    </div>
 }
}
  );
}

{
  Data.map((post) => (
    <div key={post.id}>
      <p>{post.title}</p>
      <p>{post.author}</p>
    </div>
  ));
}

export default App;
