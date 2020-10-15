import React, { Component } from 'react'
import { connect } from 'react-redux'
import Test from './Test'

export class TaskShowPage extends Component {

    render(){
        console.log(this.props)
        return (
            <div>
                I am the task show
                <Test task={this.props.tasks.find(task => task.id === parseInt(this.props.match.params.task_id, 10))}/>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        tasks: state.task.tasks
    }
}


export default connect(mapStateToProps)(TaskShowPage)

