import React from 'react';
import styles from './Navbar.module.scss'


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div>
                    <img src='/logo.svg' alt='logotipo Agência Código' className={styles.logo}/>
                </div>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}><a href="#section1">Home</a></li>
                    <li className={styles.menuItem}><a href="#section2">Código</a></li>
                    <li className={styles.menuItem}><a href="#section1">Soluções</a></li>
                    <li className={styles.menuItem}><a href="#section1">Contato</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
