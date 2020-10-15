import React, { Component } from 'react'
import { connect } from 'react-redux'
import Task from './Task'
import Footer from './Footer'

export class TaskShowPage extends Component {

    constructor() {
        super();
        this.state = { color: 'black', size: "50px"}
    }

    handleHover = (e) => {
        this.setState({
            color: "deepskyblue", 
            size: '200px', 
        });
    }


    render(){
        return (
            <div>
            <div className="container showpage">
                YOUR TASK
                <Task hover={this.handleHover}  size={this.state.size} color={this.state.color} task={this.props.tasks.find(task => task.id === parseInt(this.props.match.params.task_id, 10))}/>
            </div>
            <Footer/>
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

