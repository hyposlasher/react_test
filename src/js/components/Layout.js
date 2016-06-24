import React from "react";
import ContactList from "./ContactList";
import { createStore } from 'redux'

export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      displayedContacts: CONTACTS
    }
  }

  handleSearch(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = CONTACTS.filter(function(contact){
      var searchContactByName = contact.name.toLowerCase();
      var searchContactByNumber = contact.phoneNumber;
      return searchContactByName.indexOf(searchQuery) !== -1 || searchContactByNumber.indexOf(searchQuery) !== -1;
    });

    this.setState({
      displayedContacts: displayedContacts
    });
  }

  addContact(event){
    event.preventDefault();
    var contactName = document.getElementById("add-name").value;
    var contactPhoneNumber = document.getElementById("add-phone-number").value;
    var newContact = {
      id: CONTACTS.length+1,
      name: contactName,
      phoneNumber: contactPhoneNumber,
      image: 'http://moviez.su/uploads/posts/2013-11/1384767685_tumblr_lx1xwu4rof1qje5neo1_500.gif'
    }
    CONTACTS.push(newContact)
    this.setState({
      displayedContacts: CONTACTS
    });
  }

  render() {

    return (
      <div class="contacts">
        <form>
          <label>Name:</label>
          <br/>
          <input type="text" id="add-name" />
          <br/>
          <label>Phone Number:</label>
          <br />
          <input type="text" id="add-phone-number" />
          <br/>
          <button onClick={this.addContact.bind(this)}>Добавить</button>
        </form>
        <br/>
        <input placeholder="Search" type="text" class="search-field" onChange={this.handleSearch.bind(this)} />
        <ul class="contacts-list">
          {
            this.state.displayedContacts.map(function(el){
              return <ContactList
                key={el.id}
                name={el.name}
                phoneNumber={el.phoneNumber}
                image={el.image}
              />
            })
          }
        </ul>

      </div>
    );
  }
}
