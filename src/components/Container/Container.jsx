import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import UserCard from '../UserCard/UserCard'
import styles from './Container.module.css'


const Container = () => {
    // 1. الحالات الأساسية
    // const[searchQuery, setSearchQuery] = useState(initialInput || 'octocat');
    const[searchQuery, setSearchQuery] = useState('octocat');
    // يفضل البدء بـ null بدلاً من مصفوفة فارغة لأن البيانات القادمة عبارة عن Object
    const[userData, setUserData] = useState(null);
    // 2. حالة التحميل (تبدأ بـ true لأننا سنبدأ الجلب فور تحميل المكون)
    const[isLoading, setIsLoading] = useState(true);
    // 3. حالة الخطأ (تكون null إلا في حال حدثت مشكلة)
    const[error, setError] = useState(false);

    // 2. مراقبة تغيير searchQuery لجلب البيانات
    useEffect(() => {
        const fetchUserData = async () => {
            // 1. إعادة ضبط حالات التحميل والخطأ قبل الطلب الجديد            
            setIsLoading(true);
            setError(false);

            try {
                // 2. إرسال الطلب إلى GitHub API
                const response = await fetch(`https://api.github.com/users/${searchQuery}`);
                
                // 3. التحقق إذا كانت الاستجابة غير ناجحة (مثلاً 404)                
                if (!response.ok) {
                    throw new Error('User not found');
                }

                // 4. تحويل البيانات وتحفيظها
                const data = await response.json();
                setUserData(data);
            } 
            catch {
                // 5. إدارة الخطأ في حال فشل الطلب
                setError(true);
                setUserData(null);
            } 
            finally {
                // 6. إنهاء حالة التحميل دائماً
                setIsLoading(false);
            }
        };
        fetchUserData();  // تنفيذ العملية كلما تغير searchQuery
    },[searchQuery])

    return (
        <div className={styles.container}>
            <Header/>
            <SearchForm onSearch={setSearchQuery} error={error}/>

            {/* عرض واجهة التحميل */}
            {isLoading && <div className={styles.loading}>Loading user data...</div>}

            {/* يُرسم الكرت فقط بعد نجاح جلب البيانات */}
            {/* عرض بيانات المستخدم عند النجاح */}
            {!isLoading && !error && userData && <UserCard user={userData} />}
        </div>
    )
}

export default Container
