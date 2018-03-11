import React, { Component } from 'react';
import Buttons from '../containers/Buttons.container';
import CountView from '../containers/CountView.container';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Redux Example</h1>
        </header>
        <div>
          <Buttons />
          <CountView />
        </div>
      </div>
    );
  }
}

export default App;
