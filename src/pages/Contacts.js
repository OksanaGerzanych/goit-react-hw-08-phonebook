import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { GlobalStyle } from '../components/GlobalStyle';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector  } from 'react-redux'; 
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <GlobalStyle />
      <Helmet>
      <h1>Phonebook</h1>
      </Helmet>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && !error && <b>Request in progress...</b>}
    </Layout>
  );
}
