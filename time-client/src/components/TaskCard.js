import React from 'react'
import ReactLogo from '../logo192.png'
import { withRouter } from 'react-router-dom'

const TaskCard = (props) => {

    return (
        <div className="task-card pink darken-4">
          <button onClick={() => props.delete(props.task)} className="right btn red lighten-2">X</button>
          <button id={props.task.id} onClick={(e) => props.completion(e.target)} className={props.task.completed ? "right btn green lighten-2" :"right btn blue lighten-2" }>✓</button>
          {/*<button onClick={(e) => props.history.push('/form')} className={"right btn amber lighten-2"}>+</button>*/}
          <b>{props.task.title}</b><br/>
          <p>{props.task.description}</p>
          <img className="react-logo" src={ReactLogo} alt="react"/>
        </div>
    )
}

export default withRouter(TaskCard)
