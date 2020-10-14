import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOneTask } from '../actions/taskActions'
import Test from './Test'


export class TaskShowPage extends Component {

    componentDidMount(){
        this.props.fetchOneTask(parseInt(this.props.match.params.task_id, 10))
    }

    render(){
        return (
            <div>
                I am the task show
                <Test task={this.props.current_task}/>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        current_task: state.task.current_task
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOneTask: id => dispatch(fetchOneTask(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskShowPage)

