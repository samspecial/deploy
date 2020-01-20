import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import './reset.css';
import 'tachyons';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />

          <h2>Glad to be back again</h2>
        </Switch>
      </div>
    </Router>
  )
}


export default App;
