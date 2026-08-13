import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>devfinder</h1>
            <button className={styles.themeBtn} type="button">
                <span className={styles.themeText}>LIGHT</span>
                <img 
                src="/assets/images/icon-sun.svg" 
                alt=""
                className={styles.themeIcon}
                />
            </button>
        </header>
    )
}

export default Header
