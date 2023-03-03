import { Component } from 'react';

class InputName extends Component {
  render() {
    const { value, handlerGlobal } = this.props;

    let error = undefined;

    if (value.length > 50) error = 'Seu nome não é grande assim amigo, para de avacalhar';

    return (
      <>
        <input name="nome" type="text" value={value} onChange={handlerGlobal}/>
        <span>{error ? error : ''}</span>
      </>
    )
  }
}

export default InputName;