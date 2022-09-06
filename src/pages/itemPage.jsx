import React from "react";
import styles from "../pages/itemPaage/itemPage.module.scss"
import menu from "../components/manuMainArr"
import {Link} from "react-router-dom"
import xxxx from "../components/itemPerem"
import al from "./arrayLast"

const ItemPage = () => {
        return(
                <div className={styles.contItemPage}>
                    <div className={styles.txtItemPage}>
                        <h1 className={styles.titleItemPage}>{xxxx[0]}</h1>
                        <p className={styles.bodyItemPage}>{xxxx[3]}</p>
                        {menu.map((item,index) => {
                        if(item.id == xxxx[0]){
                        return(
                            <Link to="/order" type="submit" className={styles.byeBtn} onClick={()=>{ 
                                al.push({
                                    name: item.id,
                                    txt: item.description,
                                    img: item.img,
                                    sum: item.sum,
                                },)
                                }} ><a href="#firstBlockId">добавить в корзину</a></Link>
                        )
                        }
                    })}
                    </div>
                    <div className={styles.imgBlockItem}>
                        <img className={styles.imgItemPage} src={require(`../components/img//${xxxx[1]}`)} alt=""/>
                        <h2 className={styles.sumItemPage}>{xxxx[2]}</h2>
                    </div>
                    
                    
                </div>
                   
                
        )
}

export default ItemPage;