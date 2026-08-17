import { useState } from 'react';
import styles from './SearchForm.module.css'

const SearchForm = ({onSearch, error}) => {
    // 1. القيمة الابتدائية للحقل
    const[inputQuery, setinputQuery] = useState("octocat");


    // 2. ملاحقة كل حرف يكتبه المستخدم
    const handleInputChange = (e) => {
        setinputQuery(e.target.value)
    }


    // 3. معالجة الإرسال عند الضغط على Search أو Enter
    const handleSubmit = (e) => {
        e.preventDefault();  // يمنع إعادة تحميل الصفحة
        
        // ✅ بعد (تمرير النص المنظف)
        if (!inputQuery.trim())
            return; // حماية: عدم البحث إذا كان الحقل فارغاً

        // تمرير النص المنظف للمكون الأب
        onSearch(inputQuery.trim());
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <img 
                src="/assets/images/icon-search.svg" 
                alt=""
                className={styles.searchIcon}
                />
                <input type="text"
                placeholder="Search GitHub username…" 
                className={styles.searchInput}
                // ربط الحقل بالـ State (Controlled)
                value={inputQuery} // 👈 ربط القيمة بالـ State
                onChange={handleInputChange}
                />
            </div>
            {error && <span className={styles.errorText}>No results</span>}
            <button type="submit" className={styles.submitBtn}>
                Search
            </button>
        </form>
    )
}

export default SearchForm
