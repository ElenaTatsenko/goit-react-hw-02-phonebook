import React, { Component } from "react";
//import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList"
import { nanoid } from 'nanoid';
//import PropTypes from 'prop-types'

class App extends Component {
  state = {
  contacts:  [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    name: '',
    number: ''
  }
 
  addContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id === contactId)
    }))
  }

  hendleInputChange = event => {
    const { name, value } = event.currentTarget
    this.setState({
      [name]: value
    });
  };
  
  inputNameId = nanoid();
  inputTelId = nanoid();

  render() {
    const { contacts } = this.state
    
    
    return (
      <>
        
        <form onSubmit={this.handlerOnSubmit}>
          <label htmlFor={this.inputNameId}>
            Name
            </label>
          <input
            id={this.inputNameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.hendleInputChange}
          />
          <label htmlFor={this.inputNameId}>
            Number
            </label>
          <input
            id={this.inputTelId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.hendleInputChange}
            />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ContactList contacts={contacts}></ContactList>
      </>
     
    );
  }
}


export default App;