import { Component } from 'react';

class Select extends Component {
  render() {
    const { value, handlerGlobal } = this.props;

    let error = undefined;

    if (value === '') error = 'Você precisa selecionar uma opção!'

    return (
      <label>
        Selecione seu Estado:
        <select
          name="select"
          value={value} 
          onChange={handlerGlobal}>
            <option></option>
            <option>option1</option>
            <option>option2</option>
        </select>
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Select;