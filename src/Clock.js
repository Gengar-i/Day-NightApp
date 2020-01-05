import React from 'react';
import './Clock.css'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           time: new Date()
        }
    }
    currentTime() {
        this.setState({
            time: new Date()
        })
    }
    componentDidMount() {
       setInterval(()=>this.currentTime(),1000) 
    }
    
    render() {

        return(
            <div className="Clock">
                <div className="text">{this.state.time.toLocaleTimeString('en-GB')}</div>   
            </div>
        )
    }
}

export default Clock;