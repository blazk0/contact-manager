import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  HAS_LOADED
} from './types';
import firebase from '../firebase';

export const getContacts = () => dispatch => {
  firebase
    .database()
    .ref('/')
    .on('value', snapshot => {
      if (snapshot.val()) {
        dispatch({
          type: GET_CONTACTS,
          payload: snapshot.val().contacts
        });
      } else {
        dispatch({ type: HAS_LOADED });
      }
    });
};

export const getContact = id => dispatch => {
  firebase
    .database()
    .ref('/contacts')
    .on('value', snapshot => {
      snapshot.forEach(childSnapShot => {
        if (childSnapShot.val().id === id) {
          dispatch({
            type: GET_CONTACT,
            payload: childSnapShot.val()
          });
        }
      });
    });
};

export const deleteContact = (id, contacts) => dispatch => {
  const newContacts = contacts.filter(contact => contact.id !== id);

  firebase
    .database()
    .ref('/')
    .update({ contacts: newContacts })
    .then(
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      })
    );
};

export const addContact = contact => dispatch => {
  firebase
    .database()
    .ref('/')
    .update({ contacts: contact })
    .then(
      dispatch({
        type: ADD_CONTACT,
        payload: contact
      })
    );
};

export const updateContact = (contact, index) => dispatch => {
  firebase
    .database()
    .ref(`/contacts/${index}`)
    .update({ name: contact.name, phone: contact.phone })
    .then(
      dispatch({
        type: UPDATE_CONTACT,
        payload: contact
      })
    );
};
