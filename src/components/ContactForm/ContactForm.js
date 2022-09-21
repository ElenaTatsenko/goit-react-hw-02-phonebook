import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
    state = {
      name: '',
      number: ''
    }
    hendleInputChange = event => {
    const { name, value } = event.currentTarget
    this.setState({
        [name]: value,
    });
  };
  
    handleSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({
        name: '',
        number: ''
        });
  }
  
    inputNameId = nanoid();
    inputTelId = nanoid();
  

    render() {
        return (
     <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputNameId}>
            Name
          <input
            id={this.inputNameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.hendleInputChange}>
          </input>
        </label>
        <label htmlFor={this.inputTelId}>
            Number
          <input
            id={this.inputTelId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.hendleInputChange}>
          </input>
        </label>
        <button type="submit">Add contact</button>
      </form>
        );
    }
}


export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,

}