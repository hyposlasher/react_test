export const filterContacts = (searchQuery) => {
  return {
    type: 'FILTER_CONTACTS',
    payload: searchQuery
  }
}

export const addNewContact = (name, phoneNumber) => {
  return {
    type: 'ADD_NEW_CONTACT',
    payload: {
      name,
      phoneNumber
    }
  }
}
