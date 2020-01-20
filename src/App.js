import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Homepage from './component/Homepage/Homepage';
import Contact from './component/Contact/Contact';
import NotFound from './NotFound';
import Footer from './Footer';

import './reset.css';
import 'tachyons';
import './App.css';




function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='*' component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}


export default App;
