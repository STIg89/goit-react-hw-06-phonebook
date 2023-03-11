import { List, Item, DelButton } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';
import {
  noMatchesNotify,
  noContactsNotify,
} from 'components/Notification/Notification';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    if (filtered.length === 0 && filter) {
      noMatchesNotify();
    }
    if (contacts.length === 0) {
      noContactsNotify();
    }

    return filtered;
  };

  return (
    <List>
      {filteredContacts().map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <DelButton type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DelButton>
        </Item>
      ))}
    </List>
  );
};
