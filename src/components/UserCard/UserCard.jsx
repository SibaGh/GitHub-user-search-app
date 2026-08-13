import UserAvatar from '../UserAvatar/UserAvatar'
import UserHeader from '../UserHeader/UserHeader'
import UserLinks from '../UserLinks/UserLinks'
import UserStats from '../UserStats/UserStats'
import styles from './UserCard.module.css'

const UserCard = ({user}) => {
    return (
        <article className={styles.card}>
            <UserAvatar avatarUrl={user.avatar_url}/>
            <UserHeader
                name={user.name} 
                username={user.login} 
                joinedDate={user.created_at} 
                bio={user.bio}
            />
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
