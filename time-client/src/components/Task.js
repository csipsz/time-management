import React from 'react'
//import { withRouter } from 'react-router-dom'

const Task = ({match, tasks, history}) => {
    let task = tasks.find(task => task.id === parseInt(match.params.task_id, 10))
     return (
        task ?
        <div className="taskdiv">
            <h4>{task.title}</h4>
            {task.description}
            <p>You have {task.completed ? null : 'not'} finished this task.</p>
            <p id='back' onClick={(e) => history.push('/')}>Back to home </p>
        </div>
        : 

        <div>Loading...</div>
    )
     
}

export default Task
