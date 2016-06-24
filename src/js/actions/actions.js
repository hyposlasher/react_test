export const ADD_CONTACT = 'ADD_CONTACT'
export const SEARCH_FILTER = 'SEARCH_FILTER'

export function addContact(name, phoneNumber) {
    return {
        type: ADD_CONTACT,
        payload: {
            name: name,
            phoneNumber: phoneNumber
        }
    }
}

export function searchFilter(filter) {
    return {
        type: SEARCH_FILTER,
        filter
    }
}
