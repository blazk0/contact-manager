import React, { Component, Fragment } from 'react';
import Contact from './Contact';

import firebase from '../../firebase';

class Contacts extends Component {
  _isMounted = false;

  state = {
    contacts: [],
    hasLoaded: false
  }

  componentDidMount() {
    this._isMounted = true;

    const arr = [];

    firebase
      .database()
      .ref('/0/contacts')
      .on('value', snapshot => {
        snapshot.forEach(childSnapShot => {
          arr.push({
            name: childSnapShot.val().name,
            phone: childSnapShot.val().phone,
            id: childSnapShot.val().id
          });
          if (this._isMounted) {
            this.setState({ contacts: arr, hasLoaded: true });
          }
        })
      })
  }

  componentWillUnmount() {
    // Prevent memory leak error in the console
    this._isMounted = false;
  }

  render() {
    const { contacts, hasLoaded } = this.state;
    return (
      <Fragment>
        {hasLoaded ? (
          <Fragment>
            <h1 className="display-4 mb-3">
              <span className="text-primary">Contacts</span> List
            </h1>
            {contacts.map(contact => {
              return (
                <Contact 
                  contact={contact}
                  key={contact.id}
                />
              );
            })}
          </Fragment>
        ): <h1>Loading ...</h1>}
      </Fragment>
    )
  }
}

export default Contacts;
