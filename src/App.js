import React, { Component } from "react";

import Stopwatch from "./components/Stopwatch";
import Countdown from "./components/Countdown";
import Countdown_2 from "./components/Countdown_2";
import Countdown_3 from "./components/Countdown_3";
import Countdown_4 from "./components/Countdown_4";
import Countdown_5 from "./components/Countdown_5";
import Countdown_6 from "./components/Countdown_6";
import Countdown_7 from "./components/Countdown_7";
import Countdown_8 from "./components/Countdown_8";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title"><img className="img-logo" src={require('./Logo-Forum.png')} /> Le Grand Débat des Municipales <img className="img-logo" src={require('./20_minutes_blanc.png')} /></div>
        <div className="Timers">
          <Countdown_6 />
          <Countdown_7 />
          <Countdown_8 />
          <Countdown_2 />
        </div>
        <div className="Timers">
          <Countdown />
          <Countdown_3 />
          <Countdown_4 />
          <Countdown_5 />
        </div>
      </div>
    );
  }
}

export default App;
