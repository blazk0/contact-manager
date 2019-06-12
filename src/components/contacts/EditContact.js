import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';

const EditContact = ({
  match,
  getContact,
  updateContact,
  contacts: { contacts, contact, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const { name, phone } = formData;

  useEffect(() => {
    getContact(match.params.id);

    setFormData({
      name: loading || !contact ? '' : contact.name,
      phone: loading || !contact ? '' : contact.phone
    });
  }, [loading, getContact]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateContactHandler = e => {
    e.preventDefault();

    const { id } = match.params;

    const newContact = {
      name,
      phone,
      id
    };

    contacts.forEach((contact, index) => {
      if (contact.id === newContact.id) {
        updateContact(newContact, index);
      }
    });

    history.push('/');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={updateContactHandler}>
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
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contact
});

export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(EditContact);
