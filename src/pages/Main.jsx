import React from "react";
import FirstBlock from "../components/firsBlock/firstBlock";
import SecondBlock from "../components/secondBlock";
import Footer from "../components/footer/footer";
import styles from "./Main.module.scss";
const Main = () => {
    return (
    <div className={styles.conteiner}>
        <div className={styles.wrapper}>
            <FirstBlock/>
            <SecondBlock/>
            
        </div>
    </div>
    )
}

export default Main;