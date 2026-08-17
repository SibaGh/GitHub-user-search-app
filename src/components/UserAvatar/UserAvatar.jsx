import styles from './UserAvatar.module.css'

const UserAvatar = ({avatarUrl, username}) => {
    return (
        <img 
            src= {avatarUrl || "/assets/images/octocat.png" }
            alt={`${username || 'User'} avatar`}
            className={styles.avatar}
        />
    )
}

export default UserAvatar
