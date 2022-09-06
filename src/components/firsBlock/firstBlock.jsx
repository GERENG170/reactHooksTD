import React from "react";
import styles from "../firsBlock/firstBlock.module.scss";
import Form from "./form";


const FirstBlock = () => {
    return (
        <div id="firstBlockId" className={styles.conteinerFirst}>
            <div className={styles.firstBlock}>
                <div className={styles.wrapFirstBlock}>
                    <div className={styles.wrapForm}>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstBlock;