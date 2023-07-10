import style from './Nav.module.css'

const Nav = () => {
    return(
        <nav className={style.nav}>
            <ul className={style.navList}>
                <li>facebook</li>
                <li>insta</li>
                <li>blog</li>
                <li>youtube</li>
            </ul>
        </nav>
    )
}

export default Nav;