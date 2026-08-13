import styles from './UserLinks.module.css'

const UserLinks = ({ location, website, twitter, company }) => {
    // 1. بناء هيكل المصفوفة وتحديد خصائص كل عنصر
    const linksData = [
        { icon: 'icon-location.svg', text: location, isLink: false },
        { icon: 'icon-website.svg', text: website, isLink: true, href: website },
        { icon: 'icon-twitter.svg', text: twitter, isLink: true, href: `https://twitter.com/${twitter}` },
        { icon: 'icon-company.svg', text: company, isLink: false },
    ]
    return (
        <ul className={styles.links}>
            {linksData.map((item, index) => {
                // 2. التحقق من توفر النص وقيمته
                const isAvailable = Boolean(item.text)
                
                // 3. تحديد النص المعروض (إما النص الحقيقي أو "Not Available")
                const displayText = isAvailable ? item.text : 'Not Available'

                return (
                <li 
                    key={index} 
                    // 4. دمج الكلاسات شرطياً لتشغيل التنسيق الشفاف (Disabled Look)
                    className={`${styles.linkItem} ${!isAvailable ? styles.disabled : ''}`}
                >
                    <img src={`/assets/images/${item.icon}`} alt=""/>
                    
                    {/* 5. عرض رابط قابل للنقر فقط إذا كان العنصر رابطاً ومتاحاً */}
                    {item.isLink && isAvailable ? (
                    <a href={item.href} target="_blank" rel="noreferrer">{displayText}</a>
                    ) : (
                    <span>{displayText}</span>
                    )}
                </li>
                )
            })}
        </ul>
    )
}

export default UserLinks
