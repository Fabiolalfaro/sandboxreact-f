import Menu from './Paginas/Menu';
import Submenu from './Paginas/Submenu'
import VerCts from './Paginas/Jsx/Clientes/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Menu />
      </header>
      <main>
      <div>
        < Submenu />
      </div>
      <div>
        < VerCts />
      </div>
      <div>
        <p>@fyAlfa</p>
      </div>
    </main>
    </div>

  );
}

export default App;
