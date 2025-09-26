import Left from "./Left.jsx"
import Center from "./Center.jsx"
import Right from "./right.jsx"
import Home from "./Home.jsx"
import Slider from "./Slider.jsx"

import "./style.css"

const App = () => {
  return (
    <div>
      <nav>
        <Left/>
        <Center></Center>
        <Right></Right>
        
      </nav>
      <Slider></Slider>
    </div>
  );
};

export default App;