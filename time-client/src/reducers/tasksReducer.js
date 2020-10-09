const taskReducer = (state={}, action) => {
    switch(action.type) {
        case "LOAD_TASKS": 
        console.log(action)
            return {
                ...state,
                tasks: [],
                loading: true
            }
        case "FETCH_TASKS": 
            console.log(action)
            return {
                ...state, 
                tasks: action.tasks, 
                loading: false
            }

        default: 
        return state
    }
}

export default taskReducer