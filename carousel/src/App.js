import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';

const App = () => {
  return (
    <div>
      <Carousel slides={1} infinite={false} />

      <Carousel slides={4} infinite={true} />

      <Carousel slides={10} infinite={false} />
    </div>
  );
};


export default App;
