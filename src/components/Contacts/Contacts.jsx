import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContact } from 'redux/contacts/selectors';

import { deleteContacts } from 'redux/contacts/operation';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  console.log('contacts', contacts);

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
          <button
            type="button"
            onClick={() => {
              dispatch(deleteContacts(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
