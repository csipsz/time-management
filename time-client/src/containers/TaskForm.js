import React, { Component } from 'react'
import Pic from '../pic.png'
import { connect } from 'react-redux'
import { createTask } from '../actions/taskActions'


export class TaskForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: "", 
            day: "", 
            description: "", 
            completed: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const task = {
            task: this.state
        }

        this.props.createTask(task)

        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div >
                <form autocomplete="off" className="container" onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
                    <label htmlFor="day">Day: </label>
                    <input type="text" name="day" id="day" value={this.state.day} onChange={this.handleChange} />
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange} />
                    <input type="submit" value="ADD TO PLANS" className="waves-effect waves-light btn-large pink lighten-2"/>
                </form>
                    <img id="clock" src={Pic}/>
            </div>
        )
    }
}

export default connect(null, {createTask})(TaskForm)
