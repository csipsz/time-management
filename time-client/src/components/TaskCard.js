import React from 'react'
import ReactLogo from '../logo192.png'

const TaskCard = (props) => {


    return (
        <div className="task-card pink darken-4">
          <button onClick={() => props.delete(props.task)} className="right btn blue lighten-2">X</button>
          <b>{props.task.title}</b><br/>
          <b>{props.task.day}</b>
          <p>{props.task.description}</p>
          <img className="react-logo" src={ReactLogo}/>
        </div>
    )
}

export default TaskCard
