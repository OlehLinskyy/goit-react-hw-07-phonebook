import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFilter } from 'redux/selectors';
import { getContact } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import Contact from 'components/Contact/Contact';
import Loader from 'components/Loader/Loader';
import css from './ContactList.module.css';

function ContactList() {
  const { items, isLoading, error } = useSelector(getContact);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filters = useSelector(getFilter);

  const contactsList = items;
  const normalizedFilter = filters.toLowerCase();
  const filteredContacts = contactsList.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.list}>
      {isLoading && <Loader />}
      {error && <p className={css.error}>Error {error}</p>}
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
export default ContactList;
