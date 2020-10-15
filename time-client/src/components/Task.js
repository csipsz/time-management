import React from 'react'

const Task = (props) => {
    return (
        <div>
            {props.task ? props.task.title : "Loading"}
            <div onClick={e => props.hover(e)} className="heart" style={{color: props.color, fontSize: props.size}}>♡</div>
        </div>
    )
}

export default Task
