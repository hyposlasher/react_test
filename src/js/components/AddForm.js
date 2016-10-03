import React from "react";
import { connect } from 'react-redux';
import { addNewContact, filterContacts } from '../redux/actions'

export default class AddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
    }
  }

  handleInputName(event) {
    this.setState({name: event.target.value})
  }

  handleInputPhoneNumber(event) {
    this.setState({phoneNumber: event.target.value})
  }

  handleAddContact(event){
    event.preventDefault();
    const name = this.state.name;
    const phoneNumber = this.state.phoneNumber;
    this.props.dispatch(addNewContact(name, phoneNumber))
    this.props.dispatch(filterContacts(''))
    this.setState({
      name: '',
      phoneNumber: '',
    })
  }

  render() {
    return (
      <div className="add-form">
        <form onSubmit={this.handleAddContact.bind(this)}>
          <label>Name:</label>
          <br/>
          <input
            className="search-field"
            onChange={this.handleInputName.bind(this)}
            type="text"
            value={this.state.name}
            id="add-name" />
          <br/>
          <label>Phone Number:</label>
          <br />
          <input
            className="search-field"
            onChange={this.handleInputPhoneNumber.bind(this)}
            type="text"
            value={this.state.phoneNumber}
            id="add-phone-number" />
          <br/>
          <button type="submit" className="btn btn-success">
            Добавить
          </button>
        </form>
        <br/>
      </div>
    );
  }
}

export default connect()(AddForm)
