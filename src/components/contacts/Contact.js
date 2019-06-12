import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

const Contact = ({ contacts, deleteContact, contact: { name, phone, id } }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Fragment>
      <div className="card card-body mb-3">
        <h3>
          {name}{' '}
          <i
            style={style.downIcon}
            className="fas fa-angle-down"
            onClick={() => setShowInfo(!showInfo)}
          />
          <i
            style={style.xIcon}
            className="fas fa-times text-danger"
            onClick={() => deleteContact(id, contacts)}
          />
          <Link to={`contact/${id}`}>
            <i style={style.pen} className="fas fa-pen" />
          </Link>
        </h3>
        {showInfo && (
          <ul className="list-group">
            <li className="list-group-item">
              <span style={style.phone}>Phone: </span> {phone}
            </li>
          </ul>
        )}
      </div>
    </Fragment>
  );
};

const style = {
  phone: {
    fontWeight: 'bold'
  },
  downIcon: {
    cursor: 'pointer'
  },
  pen: {
    float: 'right',
    cursor: 'pointer',
    color: '#333'
  },
  xIcon: {
    float: 'right',
    cursor: 'pointer',
    marginLeft: '1rem'
  }
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { deleteContact }
)(Contact);
