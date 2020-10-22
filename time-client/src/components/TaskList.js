import React from 'react'
import { Link } from 'react-router-dom';

const TaskList = ({tasks}) => {

const taskList = tasks.map(obj => <Link key={obj.id} to={`/tasks/${obj.id}`}>{obj.title}<br></br></Link>)

    return (
        <div>
            {taskList}
        </div>
    )
}

export default TaskList

