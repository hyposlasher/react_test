import React from "react";


export default class ContactList extends React.Component {
  render() {
    return (
      <li class="contact">
        <img class="contact-image" src={this.props.image} width="60px" height="60px"/>
        <div>
          <div class="contact-name"> {this.props.name} </div>
          <div class="contact-number"> {this.props.phoneNumber} </div>
        </div>
      </li>
    );
  }
}
