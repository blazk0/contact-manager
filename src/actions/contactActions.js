import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from './types';
import firebase from '../firebase';

export const getContacts = () => dispatch => {
  firebase
    .database()
    .ref('/0/')
    .on('value', snapshot => {
      if (snapshot.val()) {
        dispatch({
          type: GET_CONTACTS,
          payload: snapshot.val().contacts
        });
      }
    });
}

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  }
}

export const addContact = contact => dispatch => {
  firebase
    .database()
    .ref('/0/')
    .update({ contacts: contact })
    .then(dispatch({
      type: ADD_CONTACT,
      payload: contact
    }));
}