import React, { Component } from 'react';

//ROUTING RELATED IMPORTS
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'

//COMPONENT IMPORTS
import Week from './components/Week'
import About from './components/About'
import TaskForm from './containers/TaskForm';
import TaskPage from './components/TaskPage';

//REDUX RELATED IMPORTS
import { connect } from 'react-redux'
import fetchTasks from './actions/taskActions'

class  App extends Component {

  componentDidMount(){
        this.props.fetchTasks()
    }

  render(){
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/' render={ () => <Week days={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]} /> }/>
          <Route path='/about' component={About} />
          <Route path='/form' component={TaskForm} />
          <Route path="/tasks" render={ routerProps => <TaskPage {...routerProps} tasks={this.props.tasks}/>} />
          <Route render={ () => <h1 className="red darken-3 white-text">PAGE NOT FOUND</h1> } />
        </Switch>
      </Router>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.task.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
  fetchTasks: () => dispatch(fetchTasks())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
