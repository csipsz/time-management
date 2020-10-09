import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router} from 'react-router-dom'

class  App extends Component {
  render(){
  return (
    <div className="App">
      HI. THIS IS APP Component 
      <Router>

      <Navbar/>
      </Router>
    </div>
  );
  }
}

export default App;
