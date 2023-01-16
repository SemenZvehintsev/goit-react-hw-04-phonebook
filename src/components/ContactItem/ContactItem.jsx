import PropTypes from 'prop-types';
import styles from 'components/ContactItem/ContactItem.module.css'

export const ContactItem =({id, contactName, contactNumber, onClickDelete})=> {
    return <li className={styles.contact}> - {contactName}: {contactNumber} 
    <button className={styles.button} type="button" onClick={() => onClickDelete(id)}>Delete</button> 
    </li>
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    contactName: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    onClickDelete: PropTypes.func.isRequired
}