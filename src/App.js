import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/:id" component={EditContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
