import React from 'react';
import Clock from './Clock';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState ({position: position.coords.latitude.toFixed(2)});
        console.log(position)
      },
      error => console.log(error)
    );
  }
  render() {
    return (
      <>
      <div> Position: {this.state.position}</div>
      <Clock></Clock>
      </>
    )
  }
}

export default App;