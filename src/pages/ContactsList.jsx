import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operation';
import { Form } from '../components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <Form />
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <Contacts />
      </>
    </HelmetProvider>
  );
};
