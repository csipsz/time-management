import React, { Component } from 'react'
import {connect} from 'react-redux';
import {removeTask} from '../actions/taskActions'
import {updateTask} from '../actions/taskActions'
import TaskCard from '../components/TaskCard';

export class Day extends Component {

    completion = (button) => {
        button.className = "right btn green lighten-2"
        let completedTask = this.props.tasks.find(task => task.id == button.id)
        completedTask.completed = true
        this.props.update(completedTask)
    }

    fillDay = () => {
        return this.props.tasks.map(task => {
            if (task.day.toUpperCase() === this.props.name.toUpperCase()){
                 return <TaskCard key={task.id} task={task} delete={this.props.delete} completion={this.completion}/>}
            })
    }

    render() {

        return (
            <div className="indigo customize">
                <h4 className="day-name">{this.props.name.toUpperCase()}</h4>
                {this.fillDay()}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      tasks: state.task.tasks, 
      loading: state.loading
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
    delete: task => dispatch(removeTask(task)), 
    update: task => dispatch(updateTask(task))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Day)

