import { useState } from "react";
import PropTypes from 'prop-types';
import styles from 'components/ContactForm/ContactForm.module.css'


export const ContactForm = ({contacts, onSubmitAdd}) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit =(event) => {
        event.preventDefault();
        if (contacts.map(({contactName}) => contactName.toLowerCase()).includes(name.toLowerCase())) { 
            alert(`${name} is already in contacts.`)} 
        else {
            onSubmitAdd(name, number);
            setName('');
            setNumber('');
        }
    }



    return <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name
        </label>
        <input
        className={styles.text}
        type="text"
        name="name"
        id="name"
        placeholder="Add name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={(event) => setName(event.target.value)}
        required
        />    
        <label htmlFor="tel">Number
        </label>
        <input
        className={styles.text}
        type="tel"
        name="number"
        id="tel"
        placeholder="Add number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={(event) => setNumber(event.target.value)}
        required
        />
        <button className={styles.button} type="submit">Add contact</button>
    </form>
}


ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        contactName: PropTypes.string.isRequired,
        contactNumber: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onSubmitAdd: PropTypes.func.isRequired
};