import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { Container, Title, SubTitle, Wrapper } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        // Якщо є контакти, показ. компонент фільтрації 
        <Filter />
      ) : (
        // якщо немає компонента, виводиться повідомлення про відсутність контакта
        <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      )}
      {contacts.length > 0 && (
        // Якщо є контакти, показує компонент списку контакта 
        <ContactList />
      )}
    </Container>
  );
};

export default App;