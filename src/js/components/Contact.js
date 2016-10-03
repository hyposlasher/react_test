import React from "react";


export default class Contact extends React.Component {
  render() {
    return (
      <li class="contact">
        <div>
          <div class="contact-name"> {this.props.name} </div>
          <div class="contact-number"> {this.props.phoneNumber} </div>
        </div>
      </li>
    );
  }
}
