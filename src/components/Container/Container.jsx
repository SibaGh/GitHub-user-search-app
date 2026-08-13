import { useState } from 'react'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import UserCard from '../UserCard/UserCard'
// import GithubCard from '../GithubCard/GithubCard'
import styles from './Container.module.css'


const Container = () => {
    const[searchQuery, setSearchQuery] = useState("octocat");
    const[userData, setuserData] = useState([]);
    const[isLoading, setisLoading] = useState(true);
    const[error, seterror] = useState(false);
    return (
        <div className={styles.container}>
            <Header/>
            <SearchForm onSearch={setSearchQuery}/>
            <UserCard
            user={userData}
            />
        </div>
    )
}

export default Container
