import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Hello} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/read' component={Read} />
            <Route exact path='/update' component={Update} />
            <Route exact path='/delete' component={Delete} />
            <Route render={() => {
              return <a href="/">I'm sorry but that page you are attempting to reach doesn't exist. Click either of these sentences to return to the beginning.</a>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
