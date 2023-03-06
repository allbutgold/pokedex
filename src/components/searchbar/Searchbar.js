import styles from '../searchbar/searchbar.module.scss';


const Searchbar = () => {
    return ( 
        <form className={styles.searchbar}>
            <input type="text" placeholder='search' id="searchField"/>
        </form>
    );
}

export default Searchbar;