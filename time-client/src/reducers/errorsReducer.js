const errorReducer = (state={ errors: []}, action) => {
    switch(action.type) {
        case "ADD_ERROR": 
            return {
                errors: [...action.errors]
            }
        case "CLEAR_ERROR": 
        return {
                errors: []  
        }
        default: 
        return state
    }
}

export default errorReducer