import React from 'react'
import ReactLogo from '../logo192.png'
import { withRouter } from 'react-router-dom'

const TaskCard = (props) => {

    return (
        <div className="task-card">
          <button onClick={() => props.delete(props.task)} className="right btn red">X</button>
          <button id={props.task.id} onClick={(e) => props.completion(e.target)} className={props.task.completed ? "right btn green" :"right btn blue lighten-2" }>✓</button>
          <p onClick={e => props.history.push(`tasks/${props.task.id}`)}><b>{props.task.title}</b><br/></p>
          <p>{props.task.description || props.description}</p>
          <img className="react-logo" src={ReactLogo} alt="react"/>
        </div>
    )
}

TaskCard.defaultProps = {
  description: "you could've add a description ya know"
}

export default withRouter(TaskCard)
