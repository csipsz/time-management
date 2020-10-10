import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchTasks from '../actions/taskActions'
import TaskCard from '../components/TaskCard';

class TaskList extends Component {

    componentDidMount(){
        this.props.fetchTasks()
    }

    renderWhenYouHaveIt = () => {
        if (this.props.loading){
            return <div>wait</div>
        } else {
            return this.props.tasks.tasks.map(task => <TaskCard task={task}/>)
        }
    }

    render() {

        return (
            <div >
                GIVE ME MY TASKS
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
    fetchTasks: () => dispatch(fetchTasks())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
