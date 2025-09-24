import React, { Component } from "react";
import Left from "./Left.jsx";
import Center from "./Center.jsx";
import Right from "./Right.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Left />
          <Center />
          <Right/>
        </nav>
      </div>
    );
  }
}

export default App;
