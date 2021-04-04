// import PropTypes from 'prop-types';

import Section from '../Section/Section';
import InputContacts from '../InputContacts/InputContacts';
import ContactsList from '../ContactsList/ContactsList';

// import styles from './Phonebook.scss';

const Phonebook = () => {
  return (
    <div>
      <Section>
        <InputContacts></InputContacts>
      </Section>
      <Section>
        <ContactsList></ContactsList>
      </Section>
    </div>
  );
};

export default Phonebook;
