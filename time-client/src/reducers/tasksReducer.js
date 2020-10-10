const taskReducer = (state={tasks: [], loading: false}, action) => {
    switch(action.type) {
        case "LOAD_TASKS": 
            return {
                ...state,
                tasks: [...state.tasks],
                loading: true
            }
        case "FETCH_TASKS": 
            return {
                ...state,
                tasks: action.tasks, 
                loading: false
            }
        case "ADD_TASK":
            return {
                ...state,
                tasks: state.tasks.concat(action.task), 
                loading: false
            }

        default: 
        return state
    }
}

export default taskReducer