import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './reset.css';
import 'tachyons';
import './App.css';

import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Homepage from './component/Homepage/Homepage';
import Contact from './component/Contact/Contact';
import NotFound from './NotFound';
import Feed from './component/Feed';
import Footer from './Footer';
import About from './component/About/About';





function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/feed' component={Feed} />
            <Route path='*' component={NotFound} />

          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}


export default App;
