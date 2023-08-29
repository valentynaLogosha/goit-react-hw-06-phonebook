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
      
      {contacts.length > 0 && (
        <div>
          <Filter />
          <ContactList />
        </div>
      )}
      
      {contacts.length === 0 && (
        <Wrapper>Your phonebook is empty. Add the first contact!</Wrapper>
      )}
    </Container>
  );
};

export default App;