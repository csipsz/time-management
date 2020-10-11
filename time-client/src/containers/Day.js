import React, { Component } from 'react'
import {connect} from 'react-redux';
import fetchTasks from '../actions/taskActions'
import {removeTask} from '../actions/taskActions'
import TaskCard from '../components/TaskCard';

export class Day extends Component {

    componentDidMount(){
        this.props.fetchTasks()
    }

    renderWhenYouHaveIt = () => {
        if (this.props.loading){
            return <div>LOADING YOUR RESPONSIBILITIES</div>
        } else {
            return this.props.tasks.tasks.map(task => {
                if (task.day === this.props.name){
                 return <TaskCard key={task.id} task={task}/>}
                })
        }
    }

    render() {

        return (
            <div className="pink lighten-2">
                WE ARE INSIDE DAY
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
    delete: task => dispatch(removeTask(task))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Day)

