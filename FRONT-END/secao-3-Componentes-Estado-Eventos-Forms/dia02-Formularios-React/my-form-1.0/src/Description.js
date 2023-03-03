import { Component } from 'react';

class Description extends Component {
  render() {
    const { value, handlerGlobal } = this.props

    return (
      <label>
        Adicione uma breve descrição sobre você:
        <textarea name="description" value={value} onChange={handlerGlobal}/>
      </label>
    )
  }
}

export default Description;