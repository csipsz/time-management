import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact' 
import About from './components/About'
import TaskForm from './containers/TaskForm';
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
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/form' component={TaskForm} />
          <Route render={ () => <h1 className="red darken-3 white-text">PAGE NOT FOUND</h1> } />
        </Switch>
      </Router>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => {
  return {
  fetchTasks: () => dispatch(fetchTasks())
  }
}


export default connect(null, mapDispatchToProps)(App);
