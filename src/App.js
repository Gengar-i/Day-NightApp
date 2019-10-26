import React from 'react';

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
        this.setState ({position: position.coords.latitude});
        console.log(position)
      },
      error => console.log(error)
    );
  }
  
  render() {
    return (
    <div> Position: {this.state.position}</div>
    )
  }
}

export default App;