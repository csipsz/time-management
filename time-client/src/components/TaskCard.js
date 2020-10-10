import React from 'react'
import ReactLogo from '../logo192.png'

const TaskCard = (props) => {
    return (
        <div className="row container">
        <div className="card-panel col s12 m5 pink darken-4">
        <div>{props.task.title}</div>
        <div>{props.task.day}</div>
        <p>{props.task.description}</p>
        <img className="react-logo" src={ReactLogo}/>
      </div>
  </div>
    )
}

export default TaskCard
