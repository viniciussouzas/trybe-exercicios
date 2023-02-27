import React, { Component } from 'react';

class About extends Component {
  render() {
    const titleName = <h1>Vinícius Souza</h1>;
    const description = <p>Mestre Xablau</p>;
    const subTitle = <h2>Minhas Habilidades</h2>
    const ul = 
    <ul>
        <li>Skill Number 1</li>
        <li>Skill Number 2</li>
        <li>Skill Number 3</li>
    </ul>
    return (
      <div>
        {titleName}
        {description}
        {subTitle }
        {ul}
      </div>
    );
  }
}

export default About;