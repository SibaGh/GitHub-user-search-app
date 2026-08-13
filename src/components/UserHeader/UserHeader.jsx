import styles from './UserHeader.module.css'


{/* 1. الهيدر: الصورة + الاسم وتاريخ الانضمام */}
const UserHeader = ({ name, username, joinedDate, bio }) => {
    return (
        <header className={styles.userHeader}>
            <div className={styles.userInfo}>
                <div className={styles.userTitles}>
                    <h2 className={styles.name}>{name || username}</h2>
                    <span className={styles.username}>{username}</span>
                </div>
                <span className={styles.joinedDate}>{joinedDate}</span>
            </div>

            {/* 2. البايو (يأتي تحتهما مباشرة في الموبايل) */}
            <p className={styles.bio}>
                {bio || "This profile has no bio"}
            </p>
        </header>
    )
}

export default UserHeader
