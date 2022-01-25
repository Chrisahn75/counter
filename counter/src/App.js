import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./components/counter.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    if (this.state.count >= 0 && this.state.count <= 99)
      this.setState({ count: this.state.count + 1 });
  };

  substract = () => {
    if (this.state.count >= 1 && this.state.count <= 100)
      this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <Counter
          count= {this.state.count}
          increment= {this.increment}
          substract= {this.substract}
        />
      </div>
    );
  }
}

export default App;