const fetchTasks = () => {
    return (dispatch) => {
        dispatch({type: 'LOAD_TASKS'})
        fetch('http://localhost:3001/tasks')
        .then(response => response.json())
        .then(tasks => dispatch({type: 'FETCH_TASKS', tasks: tasks}))
    }

}

export default fetchTasks