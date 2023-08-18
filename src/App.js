import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#phonebook">Phonebook</a></li>
          <li><a href="#add-entry">Add New Entry</a></li>
          <li><a href="#add-phonebook">Add New Phonebook</a></li>
        </ul>
      </nav>
      <div className="content">
        <h1>Hello World this is my first react app</h1>
        <h2>I am learning React</h2>
      </div>
    </div>
  );
}

export default App;
