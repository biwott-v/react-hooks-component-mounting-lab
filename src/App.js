import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  state = {
    timerIDs: []
  };

  componentDidMount() {
    this.addInitialTimer();
  }

  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
    }));
  };

  renderTimers = () => {
    return this.state.timerIDs.map(id => (
      <Timer 
        key={id} 
        id={id} 
        removeTimer={this.removeTimer}
      />
    ));
  };

  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }));
  };

  addInitialTimer = () => {
    this.handleAddTimer();
  };

  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>
        <div className="TimerGrid">
          {this.renderTimers()}
        </div>
      </div>
    );
  }
}

export default App;