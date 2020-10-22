import React, { Component } from 'react'
import Day from './Day'
import Clock from '../components/Clock'

export class Week extends Component {

    getDays = () => this.props.days.map((day, idx) => <Day key={idx} name={day}/>)
    render() {

        return (
            <>
            <h4 className="weekplan">
                {<Clock/>}
            </h4>
            <div className="schedule">
                {this.getDays()}
            </div>
            </>
        )
    }
}

export default Week
