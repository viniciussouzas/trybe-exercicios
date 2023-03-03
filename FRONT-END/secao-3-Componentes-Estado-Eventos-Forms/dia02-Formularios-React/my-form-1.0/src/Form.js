import { Component } from 'react';

class Form extends Component {
  state = {
    description: '',
  }

  handleDescription = (event) => this.setState(({
    description: event.target.value
  }));

  render() {
    return (
      <form className="form">
        <label>
          Selecione seu Estado:
          <select>
            <option>option1</option>
            <option>option2</option>
          </select>
        </label>

        <input name="nome" type="text"/>
        <input name="check" type="checkbox"/>

        <label>
          Adicione uma breve descrição sobre você:
          <textarea name="description" value={this.state.description} onChange={this.handleDescription}/>
        </label>
      </form>
    )
  }
}

export default Form;