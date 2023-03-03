import { Component } from 'react';

class Form extends Component {
  state = {
    select: '',
    nome: '',
    check: false,
    description: ''
  }

  handlerGlobal = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState(({
      [ name ]: value,
    }));
  }

  render() {
    return (
      <form className="form">
        <label>
          Selecione seu Estado:
          <select name="select" value={this.state.select} onChange={this.handlerGlobal}>
            <option>option1</option>
            <option>option2</option>
          </select>
        </label>

        <input name="nome" type="text" value={this.state.nome} onChange={this.handlerGlobal}/>
        <input name="check" type="checkbox" value={this.state.check} onChange={this.handlerGlobal}/>

        <label>
          Adicione uma breve descrição sobre você:
          <textarea name="description" value={this.state.description} onChange={this.handlerGlobal}/>
        </label>
      </form>
    )
  }
}

export default Form;