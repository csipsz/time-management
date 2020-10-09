

export default (state={}, action) => {
    switch(action.type) {
        case "LOAD_TASKS": 
            return {
                tasks: action.tasks,
                loading: false
            }
        default: 
        return state
    }
}