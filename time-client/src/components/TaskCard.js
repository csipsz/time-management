import React from 'react'
import ReactLogo from '../logo192.png'

const TaskCard = (props) => {


    return (
        <div className="row container">
        <div className="card-panel col s12 m5 pink darken-4">
        <button className="right btn blue lighten-2">X</button>
        <h2><b>{props.task.title}</b></h2>
        <h4>{props.task.day}</h4>
        <p>{props.task.description}</p>
        <img className="react-logo" src={ReactLogo}/>
      </div>
  </div>
    )
}

export default TaskCard
