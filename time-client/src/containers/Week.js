import React, { Component } from 'react'
import Day from '../components/Day'

export class Week extends Component {

    state = {
        days: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"]
    }

    getDays = () => this.state.days.map((day, idx) => <Day key={idx} name={day}/>)
    render() {
        return (
            <div>
                WEEKDIV
                {this.getDays()}
            </div>
        )
    }
}

export default Week
