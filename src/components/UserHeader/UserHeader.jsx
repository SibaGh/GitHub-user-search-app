import styles from './UserHeader.module.css'


{/* 1. الهيدر: الصورة + الاسم وتاريخ الانضمام */}
const UserHeader = ({ name, username, joinedDate}) => {

    const formatDate = (isoDate) => {
        if (!isoDate) return '';
        const date = new Date(isoDate);
        const day = date.getDate();
        const month = date.toLocaleString('en-GB', { month: 'short' });
        const year = date.getFullYear();
        return `Joined ${day} ${month} ${year}`;
    };

    return (
        <header className={styles.userHeader}>
            <div className={styles.userInfo}>
                <div className={styles.userTitles}>
                    <h2 className={styles.name}>{name || username}</h2>
                    <span className={styles.username}>{username}</span>
                </div>
                <span className={styles.joinedDate}>{formatDate(joinedDate)}</span>
            </div>

        </header>
    )
}

export default UserHeader
