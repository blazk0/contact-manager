import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';

class EditContact extends Component {
  state = {
    name: '',
    phone: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { name, phone } = nextProps.contact;
    this.setState({ name, phone });
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  updateContact = e => {
    e.preventDefault();

    const { name, phone } = this.state;
    const { id } = this.props.match.params;

    const newContact = {
      name,
      phone,
      id
    }

    this.props.contacts.forEach((contact, index) => {
      if (contact.id === newContact.id) {
        this.props.updateContact(newContact, index);
      }
    });

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

const mapStateToProps = state => ({
  contact: state.contact.contact,
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, { getContact, updateContact })(EditContact);
