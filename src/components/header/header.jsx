import React from "react";
import styles from "../header/header.module.scss";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerTxt}>
                <Link to ='/' className={styles.titleHeader}>shopairminsk.by</Link>
                <p className={styles.bodyHeader}>наушники гаджеты и аксессуары минск</p>
            </div>
            <div className={styles.headerBtn}>
                <Link to="/order" className={styles.btnCatalog}><p>корзина</p></Link>
                <Link to = '/about' className={styles.btnAbout}><p>о нас</p></Link>
                <Link to = '/contacts' className={styles.btnContascts}><p>контакты</p></Link>
            </div>
        </header>
    )
}

export default Header;