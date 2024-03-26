import { MdSearch } from 'react-icons/md';
import styles from './search.module.css'

const SearchUsers = ({placeholder, setSearch}) => {
    return ( 
        <div className={styles.container}>
            <MdSearch/>
            <input type='text' placeholder={placeholder} className={styles.input} onChange={(e) => setSearch(e.target.value)}/>
        </div>
     );
}
 
export default SearchUsers;