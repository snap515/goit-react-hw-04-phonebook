import { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";
import { nanoid } from "nanoid";

export const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  //   name: '',
  //   number: ''
  // }

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'))
    if (storedContacts && storedContacts.length > 0) {
      setContacts(storedContacts)
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  
  const onNameChange = e => {
    setName(e.target.value)
  }

  const onNumberChange = e => {
    setNumber(e.target.value)
  }

  const onFilterChange = e => {
    setFilter(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    const alreadyInContacts = contacts.some(contact => contact.name.toLowerCase() === name.trim().toLowerCase())
    if (alreadyInContacts) {
      alert(`Contact ${name} is already in List.`)
      return;
    }

    const newContact = { id: nanoid(), name, number }
    setContacts(prevContacts =>  [...prevContacts, newContact]
    )
    e.currentTarget.reset();
  }

  const onDeleteContact = idToDelete => {
    const isConfirmed = window.confirm('Are you sure want to delete this contact?');
    if (isConfirmed) {
      setContacts(prevContacts => prevContacts.filter(contactElement => contactElement.id !== idToDelete))
    }
  }

  const filteredContacts = contacts.filter(contactEl => contactEl.name.toLowerCase().includes(filter.trim().toLowerCase()))
    
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onNameChange={onNameChange} onNumberChange={onNumberChange} onSubmit={onSubmit}></ContactForm>
        </Section>
        <Section title="Contacts">
          <Filter filterValue ={filter} onFilterChange = {onFilterChange}></Filter>
          <ContactList contactsList={filteredContacts} onDeleteContact = {onDeleteContact}></ContactList>
        </Section>
      </div>
      
    )
};