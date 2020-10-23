import React from 'react'
import { NavLink } from 'react-router-dom';

const TaskList = ({tasks}) => {

const taskList = tasks.map(obj => <NavLink key={obj.id} to={`/tasks/${obj.id}`}>{obj.title}<br></br></NavLink>)

    return (
        <div>
            {taskList}
        </div>
    )
}

export default TaskList

