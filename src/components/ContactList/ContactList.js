import PropTypes from 'prop-types';
import React from 'react';


const ContactList = ({ contacts, onDeleteContact }) =>
    <ul>{contacts.map(({id, name, number}) =>
        <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => onDeleteContact(id)} type="button">Remove</button>
        </li>)}
    </ul>

export default ContactList;



ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
}