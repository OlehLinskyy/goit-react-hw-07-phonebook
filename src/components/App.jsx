import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.section}>
      <div className={css.form}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.form}>
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
