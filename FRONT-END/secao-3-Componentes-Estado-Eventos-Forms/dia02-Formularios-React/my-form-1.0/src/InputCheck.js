import { Component } from 'react';

class InputCheck extends Component {
  render() {
    const { value, handlerGlobal } = this.props;

    return (
      <input name="check" type="checkbox" value={value} onChange={handlerGlobal}/>
    )
  }
}

export default InputCheck;