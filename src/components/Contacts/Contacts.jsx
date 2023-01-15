import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContact } from 'redux/contacts/selectors';

import { deleteContacts } from 'redux/contacts/operation';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const filters = useSelector(getFilter);
  const normFilter = filters.toLowerCase();

  const filterContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter)
  );
  // if (!contacts) {
  //   return;
  // }
  return (
    <ul>
      {filterContactList.map(({ id, name, phone }) => (
        <li key={id}>
          <p>
            {name}: {phone}
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
