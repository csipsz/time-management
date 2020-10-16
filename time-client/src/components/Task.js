import React from 'react'
import { withRouter } from 'react-router-dom'

const Task = (props) => {
    return (
        <div className="taskdiv">
            {props.task ? <div><div>{props.task.title}</div>{props.task.description}</div> : "Loading"}
            <div style={{color: props.color}}>BACK</div>
            <div onClick={e => props.history.push('/')} onMouseEnter={e => props.hover(e)} className="heart" style={{color: props.color, fontSize: props.size}}>←</div>
        </div>
    )
}

export default withRouter(Task)
