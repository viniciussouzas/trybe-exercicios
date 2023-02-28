import './App.css';
import Image from './Image';
import staringCat from './staringCat.jpg';

function App() {
  return (
    <div className="App">
      <Image source={ staringCat } alternativeText="Cute cat staring"/>
    </div>
  );
}

export default App;
