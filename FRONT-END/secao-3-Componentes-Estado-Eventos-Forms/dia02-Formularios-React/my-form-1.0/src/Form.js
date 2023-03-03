import { Component } from 'react';
import Description from './Description';
import InputCheck from './InputCheck';
import InputName from './InputName';
import Select from './Select';

class Form extends Component {
  state = {
    select: '',
    nome: '',
    check: false,
    description: '',
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
        <fieldset>
          <Select value={this.state.select} handlerGlobal={this.handlerGlobal}/>

          <InputName value={this.state.nome} handlerGlobal={this.handlerGlobal}/>

          <InputCheck value={this.state.check} handlerGlobal={this.handlerGlobal}/>

          <Description value={this.state.description} handlerGlobal={this.handlerGlobal}/>
        </fieldset>
      </form>
    )
  }
}

export default Form;