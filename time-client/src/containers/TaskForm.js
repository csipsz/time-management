import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../actions/taskActions'
import Error from './Error'
import Pic from '../pic.png'
import Selectorstuff from '../components/Select'


export class TaskForm extends Component {

    constructor(){
        super()
        this.state = {
            title: "", 
            day: "", 
            description: "", 
            completed: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // const task = {
            //     task: this.state
            // }
            // this might be cleaner, but works without
            
        console.log('a')
        this.props.createTask(this.state, this.props.history)
        console.log('g')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div >
                <Error/>
                <form autoComplete="off" className="container" onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} />
                    <label htmlFor="day">Day: </label>
                    <input type="text" name="day" id="day" value={this.state.day} onChange={this.handleChange} />
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange} />
                    <input type="submit" value="ADD TO PLANS" className="waves-effect waves-light btn-large blue accent-3"/>
                </form>
                    <img id="clock" alt="github-wallpaper" src={Pic}/>
            </div>
        )
    }
}

export default connect(null, {createTask})(TaskForm)
