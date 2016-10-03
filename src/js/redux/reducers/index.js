import initialContacts from '../../constants/contacts'

export default function reducer(state = initialContacts, action) {
  switch (action.type) {
    case "FILTER_CONTACTS":
      let searchQuery = action.payload.toLowerCase();
      let filteredContacts = state.allContacts.filter(function(contact){
        let searchContactByName = contact.name.toLowerCase();
        let searchContactByNumber = contact.phoneNumber;
        return searchContactByName.indexOf(searchQuery) !== -1 || searchContactByNumber.indexOf(searchQuery) !== -1;
      });
      return Object.assign({}, state, { filteredContacts });
      break;
    case "ADD_NEW_CONTACT":
      return Object.assign({}, state, {
        allContacts: [
          ...state.allContacts,
          {
            id: state.allContacts.length + 1,
            name: action.payload.name,
            phoneNumber: action.payload.phoneNumber,
          },
        ]
      });
      break;
    default:
      return Object.assign({}, state, { filteredContacts: state.allContacts })
  }
}
