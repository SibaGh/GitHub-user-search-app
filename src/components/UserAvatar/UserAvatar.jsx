import styles from './UserAvatar.module.css'

const UserAvatar = () => {
    return (
        <img src="/assets/images/octocat.png" 
            alt="User avatar" 
            className={styles.avatar}
        />
    )
}

export default UserAvatar
