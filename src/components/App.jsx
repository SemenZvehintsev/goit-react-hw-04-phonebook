import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))}, [contacts]
  )

  const handleAdd = (event) => {
    const {value} = event.target;
    setFilter(value);
  }

  const handleAddContact = (name, number) => {
    setContacts([...contacts, {id: nanoid(), contactName: name, contactNumber: number}]);
   }

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const autoFilter = () => {
    const filteredContacts = contacts.filter(({contactName}) => 
    {return contactName.toLowerCase().indexOf(filter.toLowerCase()) > -1})
    return filteredContacts;
  }

  return (
    <div style={{padding: '50px'}}>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmitAdd={handleAddContact}/>
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={handleAdd}/> 
      <ContactList contacts={filter ? autoFilter() : contacts} filter={filter} onClickDelete={handleDelete}/>
    </div>
  );
};
