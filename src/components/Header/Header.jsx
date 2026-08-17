import { useEffect, useState } from 'react'
import styles from './Header.module.css'

const Header = () => {

    // 1. قراءة التفضيل المحفوظ في localStorage عند بداية التشغيل
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            return savedTheme === 'dark'
        }
        // اختياري: الاعتماد على تفضيل نظام التشغيل الخاص بالمستخدم إذا لم يحفظ شيئاً بعد
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })


    // 2. تحديث attribute خاص بالـ body وتحديث localStorage كلما تغيرت حالة isDarkMode
    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light'
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [isDarkMode])

    // 3. دالة التبديل عند النقر
    const toggleTheme = () => {
        setIsDarkMode(prev => !prev)
    }


    return (
        <header className={styles.header}>
            <h1 className={styles.title}>devfinder</h1>
            <button className={styles.themeBtn} onClick={toggleTheme} type="button">
                <span className={styles.themeText}>{isDarkMode ? 'LIGHT' : 'DARK'}</span>
                <img 
                src={`/assets/images/icon-${isDarkMode ? 'sun' : 'moon'}.svg`} 
                alt={isDarkMode ? 'Sun icon' : 'Moon icon'}
                className={styles.themeIcon}
                />
            </button>
        </header>
    )
}

export default Header
