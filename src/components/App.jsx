import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('contacts'))) {
    this.setState({contacts: JSON.parse(localStorage.getItem('contacts'))})}
  }

  componentDidUpdate(_, prevstate) {
    if (prevstate.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));}
  }

  handleAdd = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleAddContact = (name, number) => {
    this.setState(({contacts}) => {
      return {contacts: [...contacts, {id: nanoid(), contactName: name, contactNumber: number}]}})
  }

  handleDelete = (id) => {
    this.setState(({contacts}) => {
      return {contacts: contacts.filter(contact => contact.id !== id)}})
  }

  render (){
  
  const {contacts, filter} = this.state;

  const autoFilter = () => {
    const filteredContacts = contacts.filter(({contactName}) => 
    {return contactName.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1})
    return filteredContacts;
  }

  return (
    <div style={{padding: '50px'}}>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmitAdd={this.handleAddContact}/>
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={this.handleAdd}/> 
      <ContactList contacts={filter ? autoFilter() : contacts} filter={filter} onClickDelete={this.handleDelete}/>
    </div>
  );}
};
