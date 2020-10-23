import React from 'react'
import { Route } from 'react-router-dom'
import TaskList from './TaskList'
import Task from './Task'

const TaskPage = ({match, tasks}) => {

    return (
        <div className="container showpage">
           <TaskList tasks={tasks}/>
           <Route path={`${match.url}/:task_id`} render={routerProps => <Task {...routerProps} tasks={tasks}/>}/>
           <Route exact path={match.url} render={() => <h5>Check out any tasks</h5>}/>
        </div>
    )
}

export default TaskPage

