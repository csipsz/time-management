import React, { Component } from 'react'
import Day from './Day'

export class Week extends Component {

    getDays = () => this.props.days.map((day, idx) => <Day key={idx} name={day}/>)
    render() {

        return (
            <>
            <h4 className="weekplan">The weekly plan</h4>
            <div className="schedule">
                {this.getDays()}
            </div>
            </>
        )
    }
}

export default Week
