import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showInfo: false
  }

  render() {
    const { name, phone, id } = this.props.contact;
    const { showInfo } = this.state;
    return (
      <Fragment>
        <div className="card card-body mb-3">
          <h3>
            {name}{' '}
            <i 
              style={style.downIcon} 
              className="fas fa-angle-down" 
              onClick={() => this.setState({ showInfo: !this.state.showInfo })}
            />
            <Link to={`contact/${id}`}>
              <i 
                style={style.pen}
                className="fas fa-pen"
              />
            </Link>
          </h3>
          {showInfo ? (
            <ul className="list-group">
              <li className="list-group-item">
                  <span style={style.phone}>Phone: </span> {phone}
              </li>
           </ul>
          ): null}
        </div>
      </Fragment>
    )
  }
}

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
  }
}

export default Contact;
