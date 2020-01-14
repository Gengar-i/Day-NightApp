import React from 'react';
import TimeofDay from './TimeOfDay'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null,
      error: "",
      time: new Date()
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState ({position: position.coords.latitude.toFixed(2)}),
      err => this.setState({error: err.message})
    );
    setInterval(()=>this.currentTime(),1000) 
  }
  currentTime() {
    this.setState({
        time: new Date()
    })
  }
 render() {
    if(this.state.position && !this.state.error) {
    return (
      <TimeofDay time={this.state.time}>
        <div className="clock">{this.state.time.toLocaleTimeString('en-GB')}</div>   
      </TimeofDay>
    )
    }
    if(!this.state.position && this.state.error) {
      return <div className="error">{this.state.error}</div>;
    }

    return <div className="loading">LOADING...</div>;
  }
}

export default App;