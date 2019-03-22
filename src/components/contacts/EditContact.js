import React, { Component } from 'react';
import firebase from '../../firebase';

class EditContact extends Component {
  state = {
    name: '',
    phone: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    firebase
      .database()
      .ref(`/0/contacts`)
      .on('value', snapshot => {
        snapshot.forEach(childSnapShot => {
          if (childSnapShot.val().id === id) {
            this.setState({
              name: childSnapShot.val().name,
              phone: childSnapShot.val().phone
            });
          }
        })
      })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  updateContact = e => {
    e.preventDefault();

    const { name, phone } = this.state;

    firebase  
      .database()
      .ref(`/0/contacts/${this.props.match.params.id}`)
      .update({ name, phone });

      this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            Edit Contact
          </div>
          <div className="card-body">
            <form onSubmit={this.updateContact}>
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
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default EditContact;
