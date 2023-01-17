import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContact } from 'redux/contacts/selectors';

import { deleteContacts } from 'redux/contacts/operation';
import { Button } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const filters = useSelector(getFilter);
  const normFilter = filters.toLowerCase();

  const filterContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter)
  );

  return (
    <ul>
      {filterContactList.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContacts(id));
            }}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
