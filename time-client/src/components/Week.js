import React from 'react'
import Day from '../containers/Day'
import Clock from './Clock'

const Week = ({days}) => {
    const getDays = () => days.map((day, idx) => <Day key={idx} name={day}/>)
    return (
        <>
            <h4 className="weekplan">
                <Clock/>
            </h4>
            <div className="schedule">
                {getDays()}
            </div>
        </>  
    )
}

export default Week

