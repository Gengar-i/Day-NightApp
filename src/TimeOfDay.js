import React from 'react';
import './TimeOfDay.css'

class TimeOfDay extends React.Component {

    getSeason(month) {
        if(month>2 && month<10 ){
            return "summer";
        }
    }
    
    render() {
        const season = this.getSeason(this.props.time.getMonth())
        console.log(this.props.time.getHours())
        if(season === "summer") {
            if(this.props.time.getHours()<=6 && this.props.time.getHours()>=22) {
                return (
                <div className="night">
                <div className="timeText">Noc</div>
                <div>{this.props.children}</div>
                </div>)
            }
            if(this.props.time.getHours()>6 && this.props.time.getHours()<=12) {
                return (
                <div className="morning">
                <div className="timeText">Ranek</div>
                <div>{this.props.children}</div>
                </div>)
            }
            if(this.props.time.getHours()>12 && this.props.time.getHours()<=16) {
                return (
                <div className="afternoon">
                <div className="timeText">Popołudnie</div>
                <div>{this.props.children}</div>
                </div>)
            }
            if(this.props.time.getHours()>16 && this.props.time.getHours()<22) {
                return (
                <div className="evening">
                <div className="timeText">Wieczór</div>
                <div>{this.props.children}</div>
                </div>)
            }
        }
        else {
            if(this.props.time.getHours()<=5 && this.props.time.getHours()>=21) {
                return (
                <div className="night">
                <div className="timeText">Noc</div>
                <div>{this.props.children}</div>
                </div>)
            }
            if(this.props.time.getHours()>5 && this.props.time.getHours()<=11) {
                return (
                <div className="morning">
                <div className="timeText">Ranek</div>
                <div>{this.props.children}</div>
                </div>)
            }
            if(this.props.time.getHours()>11 && this.props.time.getHours()<=15) {
                return (
                <div className="afternoon">
                <div className="timeText">Popołudnie</div>
                <div>{this.props.children}</div>
                </div>)
            }
            if(this.props.time.getHours()>15 && this.props.time.getHours()<21) {
                return (
                <div className="evening">
                <div className="timeText">Wieczór</div>
                <div>{this.props.children}</div>
                </div>)
            }
        }
    }
}

export default TimeOfDay;