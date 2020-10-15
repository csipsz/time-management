import React, { Component } from 'react'
import { connect } from 'react-redux'
import Task from './Task'

export class TaskShowPage extends Component {

    constructor() {
        super();
        this.state = { color: 'black', size: "50px"}
    }

    handleHover = (e) => {
        this.setState({
            color: "red", 
            size: '300px', 
        });
    }


    render(){
        return (
            <div className="container showpage">
                I am the task show
                <Task hover={this.handleHover}  size={this.state.size} color={this.state.color} task={this.props.tasks.find(task => task.id === parseInt(this.props.match.params.task_id, 10))}/>
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

