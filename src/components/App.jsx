import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import css from './App.module.css'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactsList/ContactsList'
let localContacts = [];
  if (localStorage.getItem("contacts")) {
     localContacts = JSON.parse(localStorage.getItem("contacts"))
  };
const App = () => {
  
  const [contacts, setContacts] = useState(localContacts);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
       localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts.length]);

  const changeContacts = (name, number) => {
     if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())){
      alert(`${name} is already in contacts`)
    } else {
      const newContact = { 'id': nanoid(), 'name': name, 'number': number }
      setContacts((prev) => ([newContact, ...prev]))
    }
  }
  const changeFilter = ({target:{value}}) => {
    setFilter(value);
    }
 const deleteContact = idContact => {
      
      setContacts(prev => prev.filter(contact => contact.id !== idContact))
    
  } 
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  return (
      <div className={css.phonebook}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm onSubmit={changeContacts} />
        <h2 className={css.contacts__title}>Contacts</h2>
        <Filter
          filter={filter}
          onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={deleteContact}
        />
      </div>
    )
}
export default App