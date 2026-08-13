import styles from './UserStats.module.css'

const UserStats = ({ repos, followers, following }) => {
    // 1. تجميع البيانات الممررة عبر الـ Props داخل مصفوفة كائنات (Objects)
    const statsData = [
        { label: 'Repos', value: repos },
        { label: 'Followers', value: followers },
        { label: 'Following', value: following },
    ]
    return (
        <div className={styles.stats}>
            {/* 2. تطبيق دالة map على المصفوفة */}
            {statsData.map((stat)=>
                <div key={stat.label} className={styles.statItem}>
                    <span className={styles.statTitle}>{stat.label}</span>
                    <strong className={styles.statValue}>{stat.value}</strong>
                </div>
            )}
        </div>
    )
}

export default UserStats
