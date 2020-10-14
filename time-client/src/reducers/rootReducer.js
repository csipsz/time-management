import { combineReducers } from 'redux';
import task from './tasksReducer'
import error from './errorsReducer'

export default combineReducers({
    task, 
    error
})
