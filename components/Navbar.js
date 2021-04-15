import {useEffect, useState} from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    useEffect(() => {
        showButton();
    }, []);

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbar_container}>
                    <Link href='/' onClick={closeMobileMenu}>
                        <div className={styles.navbar_logo}>
                            EDU.BY
                            <i className={`fa fa-graduation-cap ${styles.cap}`} aria-hidden='false'/>
                        </div>
                    </Link>
                    <div className={styles.menu_icon} onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true"/>
                    </div>
                    <ul className={click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu}>
                        <li className={styles.nav_item}>
                            {/*Link Home.js*/}
                            <Link
                                href='/'
                                className={styles.nav_links}
                                onClick={closeMobileMenu}>
                                <a href="#" className={styles.nav_links}>Главная</a>
                            </Link>
                        </li>
                        <li className={styles.nav_item}>
                            {/*Link Services.js*/}
                            <Link
                                href='/services'
                                onClick={closeMobileMenu}
                            >
                                <a href="#" className={styles.nav_links}>Образование</a>
                            </Link>
                        </li>
                        <li className={styles.nav_item}>
                            {/*Link Products.js*/}
                            <Link
                                href='/products'
                                onClick={closeMobileMenu}
                            >
                                <a href="#" className={styles.nav_links}>Свободное время</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar