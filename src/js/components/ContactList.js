import React from "react";
import { connect } from "react-redux"
import Contact from "./Contact";
import AddForm from "./AddForm";
import {filterContacts } from "../redux/actions"


class ContactList extends React.Component {

  handleFilter(event){
    this.props.dispatch(filterContacts(event.target.value))
  }

  render() {

    return (
      <div class="contacts">

        <input
          placeholder="Search"
          type="text"
          class="search-field"
          onChange={this.handleFilter.bind(this)}
        />
        <ul class="contacts-list">
          {
            this.props.filteredContacts.map(function(contact){
              return <Contact
                key={contact.id}
                name={contact.name}
                phoneNumber={contact.phoneNumber}
              />
            })
          }
        </ul>

      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    allContacts: state.allContacts,
    filteredContacts: state.filteredContacts,
  }
)

export default connect(mapStateToProps)(ContactList);
