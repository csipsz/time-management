import React from 'react'
import TaskForm from '../containers/TaskForm'
import TaskList from '../containers/TaskList'

const Home = () => {
    return (
        <div>
        <TaskList/>
        <div>
            THIS IS MY HOME COMPONENT, WHICH HAS TASKLIST INSIDE
        </div>
        </div>
    )
}

export default Home
