import React, { useEffect, Fragment } from 'react';
import Contact from './Contact';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getContacts } from '../../actions/contactActions';

const Contacts = ({ getContacts, contacts: { contacts, loading } }) => {
  useEffect(() => getContacts(), []);

  return (
    <Fragment>
      <h1 className="display-4 mb-3">
        <span className="text-primary">Contacts</span> List
      </h1>
      {loading ? (
        <Spinner />
      ) : !loading && !contacts.length ? (
        <Fragment>
          <h1 className="display-4">You dont have any contacts ..</h1>
          <Link to="/contact/add" className="btn btn-dark">
            Add now
          </Link>
        </Fragment>
      ) : (
        contacts.map(contact => <Contact contact={contact} key={contact.id} />)
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  contacts: state.contact
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
