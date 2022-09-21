import PropTypes from 'prop-types';
import React from 'react';


const ContactFilter = ({ value, onChange }) => (
    <label>Find contact by name
        <input type="text" value={value} onChange={onChange}></input>
    </label>
);
   

export default ContactFilter;

ContactFilter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}
