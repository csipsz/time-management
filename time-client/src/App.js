import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact' 
import About from './components/About'
import TaskForm from './containers/TaskForm';

class  App extends Component {
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
          <Route render={ () => <div className="red darken-3">PAGE NOT FOUND</div>} />
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
