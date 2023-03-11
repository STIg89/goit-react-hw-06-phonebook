import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { Wrapper } from './Phonebook.styled';
import {
  Notification,
  noContactsNotify,
  noMatchesNotify,
} from 'components/Notification/Notification';

const initialLocalStorage = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const Phonebook = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialLocalStorage
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    if (contacts.length === 0) {
      noContactsNotify();
    }
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notification(name);
      return;
    }

    setContacts(prevState => {
      return [...prevState, { id: nanoid(4), name, number }];
    });
  };

  const handleFilter = e => {
    return setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    if (filtered.length === 0 && filter) {
      noMatchesNotify();
    }
    return filtered;
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Wrapper>
      <Section title="Phonebook">
        <ContactForm onSubmitForm={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <ContactFilter value={filter} onFilterChange={handleFilter} />
        <ContactList
          contacts={filteredContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </Wrapper>
  );
};
