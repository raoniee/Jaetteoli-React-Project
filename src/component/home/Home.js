import Download from './Download';
import style from './Home.module.css'
import HomeDescription from './HomeDescription';
import Login from './Login';

const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.main}>
                <HomeDescription></HomeDescription>
                <Login></Login>
            </div>
            <Download></Download>
        </div>
    )
}

export default Home;