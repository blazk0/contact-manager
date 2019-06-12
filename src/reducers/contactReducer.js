import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  HAS_LOADED
} from '../actions/types';

const initialState = {
  contacts: [],
  contact: {},
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
        loading: false
      };
    case HAS_LOADED:
      return {
        ...state,
        loading: false
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload;
        })
      };
    case ADD_CONTACT:
      return {
        contacts: action.payload
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (action.payload.id === contact.id) {
            return (contact = action.payload);
          } else {
            return contact;
          }
        })
      };
    default:
      return state;
  }
}
