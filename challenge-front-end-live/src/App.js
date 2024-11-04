import logo from './logo.svg';
import './App.css';
import Greeting from './componenets/Greeting';

function App() {
  return (
    <div className="App">
      <h1>Our React App</h1>
      <Greeting name="John" message="Welcome"/>
      <Greeting name="Alice" message="Hello"/>
      <Greeting name="Bob" message="Welcome"/>
    </div>
  );
}

export default App;
