import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';
import styles from 'components/ContactList/ContactList.module.css'

export const ContactList = ({contacts, filter, onClickDelete}) => {
    return  <ul className={styles.contactList}>{contacts.map(({id, contactName, contactNumber}) => 
    <ContactItem key={id} id={id} contactName={contactName} contactNumber={contactNumber} onClickDelete={onClickDelete}/>)}
    </ul>
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        contactName: PropTypes.string.isRequired,
        contactNumber: PropTypes.string.isRequired
    }).isRequired).isRequired,
    filter: PropTypes.string.isRequired,
    onClickDelete: PropTypes.func.isRequired
}