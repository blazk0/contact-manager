import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';
import uuid from 'uuid';

const AddContact = ({ addContact, history, contacts }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const { name, phone } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();

    const contact = {
      name,
      phone,
      id: uuid()
    };

    addContact(contacts ? [...contacts, contact] : [contact]);

    history.push('/');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="form-control"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                className="form-control"
                value={phone}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary btn-block">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { addContact }
)(AddContact);
