import React from "react";
import styles from "../footer/footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footerBlock}>
            <p className={styles.inst}><a href="https://www.instagram.com/shopairminsk.by/">INSTAGRAM</a></p>
            <p className={styles.more}>Указанные контакты также являются контактами для связи по вопросам обращения покупателей о нарушении их прав. Номер телефона работников местных исполнительных и распорядительных органов по месту государственной регистрации ООО «Триовист», уполномоченных рассматривать обращения покупателей: +375 17 374 01 46.
В торговом реестре с 23 июня 2010 г., № регистрации 156473, УНП 190806803, регистрация №190806803, 22.02.2007, Мингорисполком.
© 2004–2022 shopairminsk.store, Общество с ограниченной ответственностью «Триовист», юр.адрес: 220020, Минск, пр. Победителей, 100, оф. 203 E-mail</p>
        </footer>
    )
}

export default Footer;