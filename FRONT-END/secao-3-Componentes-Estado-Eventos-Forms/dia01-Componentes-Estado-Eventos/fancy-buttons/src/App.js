import { Component } from 'react';
import './App.css';

// Abaixo realizei as duas formas de vincular funções nas classes... Com arrow function, não se faz necessário utilizar o constructor. Já com funções normais, é preciso utilizar o constructor, pois senão o this não é reconhecido dentro da nossa função e retorna undefined.

// Abaixo também realizei as duas formas de definir estados, dentro do constructor ou também utilizando a sintaxe Public Class Field.

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0
    };

    this.button3 = this.button3.bind(this);

  };

  // state = {
  //   counter1: 0,
  //   counter2: 0,
  //   counter3: 0
  // };

  button1 = () => {
    this.setState((previousState, _props) => ({
      counter1: previousState.counter1 += 1
    }));
  };
  
  button2 = () => {
     this.setState((previousState, _props) => ({
      counter2: previousState.counter2 + 1
     }));
  };

  button3 () {
    this.setState((previousState, _props) => ({
      counter3: previousState.counter3 + 1
    }));
  };

  render() {
    const { counter1, counter2, counter3 } = this.state;

    return (
      <div>
        <button onClick={this.button1}>
          { counter1 }
        </button>
        <button onClick={this.button2}>
          { counter2 }
        </button>
        <button onClick={this.button3}>
          { counter3 }
        </button>
      </div>
    )
  }
}

export default App;
