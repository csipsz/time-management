const fetchTasks = () => {
    return (dispatch) => {
        dispatch({type: 'LOAD_TASKS'})
        fetch('http://localhost:3001/tasks')
        .then(response => response.json())
        .then(tasks => dispatch({type: 'FETCH_TASKS', tasks: tasks}))
    }

}


export const createTask = (taskInfo) => {
    return (dispatch) => {
        fetch('http://localhost:3001/tasks', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskInfo)
        })
        .then( resp => resp.json() )
        .then( task => {
            dispatch(addTask(task))
        })
    }
}

const addTask = (task) => {
    return {
        type: 'ADD_TASK', 
        task
    }
}

export const removeTask = (taskInfo) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/tasks/${taskInfo.id}`, {
            method: "delete",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskInfo)
        })
        .then( resp => resp.json() )
        .then( task => console.log(task))
    }
}

export default fetchTasks