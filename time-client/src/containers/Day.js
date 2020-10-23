import React, { Component } from 'react'
import {connect} from 'react-redux';
import {removeTask} from '../actions/taskActions'
import {updateTask} from '../actions/taskActions'
import TaskCard from '../components/TaskCard';
import Selectorstuff from '../components/Select'

export class Day extends Component {

    state = { 
        completed: null
    }

    completion = (button) => {
        button.className = "right btn green"
        let completedTask = this.props.tasks.find(task => task.id === parseInt(button.id, 10))
        completedTask.completed = true
        this.props.update(completedTask)
    }

    fillDay = () => {
        return this.props.tasks.map(task => {
            if (task.day.toUpperCase() === this.props.name.toUpperCase() && (task.completed === this.state.completed || this.state.completed === null )){
                 return <TaskCard key={task.id} task={task} delete={this.props.delete} completion={this.completion}/>}
            })
    }


    filterDays = (completedstuff) => {
        this.setState({
            completed: completedstuff
        })
    }

    render() {

        return (

            <div className="customize stylegroup">
                <Selectorstuff filterDays={this.filterDays}/>
                <h4 className="day-name white-text">{this.props.name.toUpperCase()}</h4>
                {this.fillDay()}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      tasks: state.task.tasks
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
    delete: task => dispatch(removeTask(task)), 
    update: task => dispatch(updateTask(task))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Day)

