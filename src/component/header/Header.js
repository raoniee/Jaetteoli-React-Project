import Nav from './Nav';
import style from './Header.module.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <div className={style.logo}>
                    <img className={style.logoImg} src={logo}></img>
                </div>
            </Link>
            <Nav />
        </header>
    )
}

export default Header;