const errorReducer = (state={ errors: []}, action) => {
    switch(action.type) {
        case "ADD_ERROR": 
            return {
                ...state,
                errors: [action.errors]
            }
        case "CLEAR_ERROR": 
        return {
            ...state,
                errors: [action.errors]  
        }
        default: 
        return state
    }
}

export default errorReducer