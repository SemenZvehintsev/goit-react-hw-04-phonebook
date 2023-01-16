import { Component } from "react";
import PropTypes from 'prop-types';
import styles from 'components/ContactForm/ContactForm.module.css'


export class ContactForm extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string.isRequired,
            contactName: PropTypes.string.isRequired,
            contactNumber: PropTypes.string.isRequired
        }).isRequired).isRequired,
        onSubmitAdd: PropTypes.func.isRequired
    };

    state = {
        name: '',
        number: ''
    }

    handleAdd = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit =(event) => {
        event.preventDefault();
        const {name, number} = this.state;
        if (this.props.contacts.map(({contactName}) => contactName.toLowerCase()).includes(name.toLowerCase())) { 
            alert(`${name} is already in contacts.`)} 
        else {
            this.props.onSubmitAdd(name, number);
            this.setState({
                name: '',
                number: ''
        })}
    }

    render() {
        const {name, number} = this.state;

        return <form className={styles.form} onSubmit={this.handleSubmit}>
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
        onChange={this.handleAdd}
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
        onChange={this.handleAdd}
        required
        />
        <button className={styles.button} type="submit">Add contact</button>
    </form>}
}
