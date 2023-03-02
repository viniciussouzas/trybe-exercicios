import { Component } from 'react';
import './App.css';

const button1 = () => console.log("Clicou botão 1");

const button2 = () => console.log("Clicou botão 2");

const button3 = () => console.log("Clicou botão 3");

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={button1}>
          My button1
        </button>
        <button onClick={button2}>
          My button2
        </button>
        <button onClick={button3}>
          My button3
        </button>
      </div>
    )
  }
}

export default App;
