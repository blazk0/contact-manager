import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';

import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <Fragment>
        <h1 className="display-4 mb-3">
          <span className="text-primary">Contacts</span> List
        </h1>
        {contacts.map(contact => {
          return (
            <Contact 
              contact={contact}
              key={contact.id}
              getNewContacts={this.newContacts}
            />
          );
        })}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getContacts })(Contacts);
