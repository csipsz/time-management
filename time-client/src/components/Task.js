import React from 'react'
//import { withRouter } from 'react-router-dom'

const Task = ({match, tasks}) => {
    let task = tasks.find(task => task.id === parseInt(match.params.task_id, 10))
     return (
        task ?
        <div className="taskdiv">
            {task.description}
        </div>
        : 
        
        <div>Loading...</div>
    )
     
}

export default Task
