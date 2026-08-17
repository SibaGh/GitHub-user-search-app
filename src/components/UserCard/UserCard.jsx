import UserHeader from '../UserHeader/UserHeader'
import UserLinks from '../UserLinks/UserLinks'
import UserStats from '../UserStats/UserStats'
import styles from './UserCard.module.css'

const UserCard = ({user}) => {
    return (
        <article className={styles.card}>
            {/* تجميع الصورة مع الهيدر للشاشات الصغيرة */}
            <div className={styles.topSection}>
                <img src={user.avatar_url} alt={name} className={styles.avatar} />
                <UserHeader name={name} username={user.login} joinedDate={user.created_at} />
            </div>
            <p className={styles.bio}>{user.bio || 'This profile has no bio'}</p>
            <UserStats
                repos={user.public_repos} 
                followers={user.followers} 
                following={user.following}
            />
            <UserLinks
                location={user.location} 
                website={user.blog} 
                twitter={user.twitter_username} 
                company={user.company}
            />
        </article>
    )
}

export default UserCard
