import React, { Component } from 'react'
import Day from './Day'

export class Week extends Component {

    state = {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }

    getDays = () => this.state.days.map((day, idx) => <Day key={idx} name={day}/>)
    render() {

        return (
            <div className="schedule">
                <h4>The weekly plan</h4>
                {this.getDays()}
            </div>
        )
    }
}

export default Week
