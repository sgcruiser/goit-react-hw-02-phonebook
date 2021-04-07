// import PropTypes from 'prop-types';

import styles from './ContactItem.module.scss';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          onDeleteContact(contact);
        }}
      >
        Delete
      </button>
    </li>
  );
};

// ContactItem.propTypes = {
//   contact: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     }),
//   ),
// };

export default ContactItem;
