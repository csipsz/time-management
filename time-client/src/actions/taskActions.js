const fetchTasks = () => {
    return (dispatch) => {
        dispatch({type: 'LOAD_TASKS'})
        fetch('http://localhost:3001/tasks')
        .then(response => response.json())
        .then(tasks => dispatch({type: 'FETCH_TASKS', tasks: tasks}))
    }

}
///////////////////////////////////////////////////////////////////////////////////////////
export const createTask = (taskBack) => {
    return (dispatch) => {
        fetch('http://localhost:3001/tasks', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskBack)
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

/////////////////////////////////////////////////////////////////////////////////////////////////


export const removeTask = (taskBack) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/tasks/${taskBack.id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskBack)
        })
        .then( resp => resp.json() )
        .then( task => {
            dispatch(deleteTask(task))
    })
}
}

const deleteTask = (task) => {
    return {
        type: 'DELETE_TASK', 
        task
    }
} 


///////////////////////////////////////////////////////////////////////////////////////////////

export const updateTask = (taskBack) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/tasks/${taskBack.id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskBack)
        })
        .then( resp => resp.json() )
        .then( task => dispatch(completeTask(task)))
        }
    }

const completeTask = (task) => {
    return {
        type: 'UPDATE_TASK', 
        task
    }
}


export default fetchTasks