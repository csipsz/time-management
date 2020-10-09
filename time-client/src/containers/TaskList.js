import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchTasks from '../actions/taskActions'

export class TaskList extends Component {

    handleClick = (e) => {
        this.props.fetchTasks()
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                TASKLIST COMPONENT
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      tasks: state, 
      loading: state.loading
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    fetchTasks: () => dispatch(fetchTasks())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
