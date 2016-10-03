import React from "react";
import AddForm from "./AddForm"
import ContactList from "./ContactList"

export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <AddForm />
        <ContactList />
      </div>
    )
  }
}
