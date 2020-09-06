import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App;

