import React, { Component } from 'react';
import firebase from '../../firebase';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    phone: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  submitForm = e => {
    e.preventDefault();

    const { name, phone } = this.state;

    const contact = {
      name,
      phone,
      id: uuid()
    }

    firebase  
      .database()
      .ref(`/0/contacts/${contact.id}`)
      .update(contact);

      this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            Add Contact
          </div>
          <div className="card-body">
            <form onSubmit={this.submitForm}>
              <div className="form-group">
                <label htmlFor="label">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter Name" 
                  className="form-control" 
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="Enter Phone Number" 
                  className="form-control" 
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary btn-block">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddContact
