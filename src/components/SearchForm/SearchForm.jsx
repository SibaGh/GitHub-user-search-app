import { useState } from 'react';
import styles from './SearchForm.module.css'

const SearchForm = ({onSearch}) => {
    const[inputQuery, setinputQuery] = useState("octocat");

    const handleInputChange = (e) => {
        setinputQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();  // يمنع إعادة تحميل الصفحة
        onSearch()
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <img 
                src="/assets/images/icon-search.svg" 
                alt=""
                className={styles.searchIcon}
                />
                <input type="text"
                placeholder="Search GitHub username…" 
                className={styles.searchInput}
                onChange={handleInputChange}
                />
            </div>
            <button type="submit" className={styles.submitBtn}>
                Search
            </button>
        </form>
    )
}

export default SearchForm
