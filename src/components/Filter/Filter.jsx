import PropTypes from 'prop-types';
import styles from 'components/Filter/Filter.module.css'

export const Filter = ({filter, onChangeFilter}) => {
    return <><div className={styles.filterForm}>
    <label htmlFor="filter">Find contacts by name</label>
    <input className={styles.text} type="text" id="filter" name="filter" value={filter} onChange={onChangeFilter}/>
    </div></>
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
}