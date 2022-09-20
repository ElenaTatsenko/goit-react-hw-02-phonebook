//import PropTypes from 'prop-types';
import React from 'react';


const ContactList = ({ contacts }) => <ul>{contacts.map(contact => <li key={contact.id}><p>{ contact.name}</p></li>)}</ul>

export default ContactList;


