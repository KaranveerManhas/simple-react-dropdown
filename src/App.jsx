import './App.css';
import { Dropdown } from './components/dropdown/Dropdown';

function App() {


  const items = ["Yes", "No", "Probably", "Probably Not"];

  return (
    <div className="App">
      <header className="App-header">
        <Dropdown items={items} />
      </header>
    </div>
  );
}




export default App;
