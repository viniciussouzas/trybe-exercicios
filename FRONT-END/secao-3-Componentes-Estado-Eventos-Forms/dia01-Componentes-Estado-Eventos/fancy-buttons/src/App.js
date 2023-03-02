import { Component } from 'react';
import './App.css';

// Abaixo realizei as duas formas de vincular funções nas classes... Com arrow function, não se faz necessário utilizar o constructor. Já com funções normais, é preciso utilizar o constructor, pois senão o this não é reconhecido dentro da nossa função e retorna undefined

class App extends Component {
  constructor() {
    super()
    
    this.button3 = this.button3.bind(this);
  }

  button1 = () => console.log("Clicou botão 1");
  
  button2 = () => {
      console.log(this)
      console.log("Clicou botão 2");
  }

  button3 () {
    console.log(this);
    console.log("Clicou botão 3");
  }
  
  render() {
    return (
      <div>
        <button onClick={this.button1}>
          My button1
        </button>
        <button onClick={this.button2}>
          My button2
        </button>
        <button onClick={this.button3}>
          My button3
        </button>
      </div>
    )
  }
}

export default App;
