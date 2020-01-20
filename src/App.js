import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import CardList from './component/Homepage/CardList';

import './reset.css';
import 'tachyons';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={CardList} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />

            <h2>Glad to be back again</h2>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}


export default App;
