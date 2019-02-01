import React, { Component } from 'react';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';
import routes from './route';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Header />
        </h1>
        
        {routes}
      </div>
    );
  }
}

export default App;
