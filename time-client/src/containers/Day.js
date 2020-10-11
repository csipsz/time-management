import React, { Component } from 'react'
import {connect} from 'react-redux';
import fetchTasks from '../actions/taskActions'
import {removeTask} from '../actions/taskActions'
import {updateTask} from '../actions/taskActions'
import TaskCard from '../components/TaskCard';

export class Day extends Component {

    componentDidMount(){
        this.props.fetchTasks()
    }

    completion = (button) => {
        button.className = "right btn green lighten-2"
        let completedTask = this.props.tasks.tasks.find(task => task.id == button.id)
        completedTask.completed = true
        console.log(completedTask)
        this.props.update(completedTask)

    }

    renderWhenYouHaveIt = () => {
        if (this.props.loading){
            return <div>LOADING...</div>
        } else {
            return this.props.tasks.tasks.map(task => {
                if (task.day.toUpperCase() === this.props.name.toUpperCase()){
                 return <TaskCard key={task.id} task={task} delete={this.props.delete} completion={this.completion}/>}
                })
        }
    }

    render() {

        return (
            <div className="pink lighten-2 customize">
                <h4 className="day-name">{this.props.name.toUpperCase()}</h4>
                {this.renderWhenYouHaveIt()}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      tasks: state.tasks, 
      loading: state.loading
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
    fetchTasks: () => dispatch(fetchTasks()), 
    delete: task => dispatch(removeTask(task)), 
    update: task => dispatch(updateTask(task))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Day)

