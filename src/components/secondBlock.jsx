import React from "react";
import styles from "./secondBlock/secondBlock.module.scss";
import arr from "./arr";
import al from "../pages/arrayLast";
import arrName from "../pages/arrName";
import zzz from "../components/colItem";
import menu from "../components/manuMainArr"
import xxxx from "./itemPerem";
import {Link} from "react-router-dom";
import arr12 from "../components/arr";
let al2 = [];

// let arr = [1,2,3];
let out = () => {
    let list2 = '';
    if(arr.length>0){
        document.getElementById('outVision').innerHTML = `Количество товара в корзине: ${arr.length}`;
    }
    for(let key=0;key<arr.length;key++){
        list2 += arr[key];
    } 
    
    
    document.getElementById('hidenOut').value = list2;

}

const SecondBlock = () => {
    return (
        <div className={styles.containerSecondBlock} id="catalogScroll">
            <div className={styles.wrapperSecondBlock}>
                <div className={styles.titleGalerry}>
                    <h1>КАТАЛОГ</h1>
                </div>
                <div className={styles.filterGalery}>
                    <select  className={styles.selectObj} name="" >
                        <option value="deff" className="option1" >фильтр</option>
                        <option value="pod" className="option1" >наушники</option>
                        <option value="bamper" className="option2">чехлы</option>
                        <option value="watch" className="option3">часы</option>
                        <option value="bank" className="option4">зарядные устройства</option>
                    </select>
                </div>
                
                <div className={styles.bodyGalery}>
                    
                    {menu.map((item,index) => {
                        if(item.if == 1){
                        return (
                        <div className={styles.itemGalery} id={item.id}>
                            <Link to="/itemPage" className={styles.itemBody}>
                                
                                <img onClick={()=>{xxxx.splice(0,xxxx.length);xxxx.push(item.id);xxxx.push(item.img);xxxx.push(item.sum); xxxx.push(item.description);}} className={styles.imgItem }src={require(`./img/${item.img}`)} alt="" />
                                
                            </Link>
                            <div className={styles.byeBlock}>
                                <button  type="submit" onClick={()=>{window.location.href = '#firstBlockId';
                                    
                                    al.push({
                                        name: item.id,
                                        txt: item.description,
                                        img: item.img,
                                        sum: item.sum,
                                    },)
                                    zzz.unshift(al.length);
                                    let elem = document.getElementById("submitSendId");
                                    elem.innerHTML = `КОРЗИНА (${zzz[0]})`;
                                    
                                    arr12.push(item.id);
                                    out();
                                    }} className={styles.itemBtnTwo}><a href="#firstBlockId">купить</a></button>
                                <p className={styles.summary}>{item.sum}</p>
                            </div>
                        </div>
                        )
                        }
                        else{
                            let elem = document.getElementsByClassName("itemBtnTwo");
                            console.log(elem);
                           
                            return (
                                <div className={styles.itemGalery} id={item.id}>
                                    <div className={styles.itemBody}>
                                        <img className={styles.imgItem }src={require(`./img/${item.img}`)} alt="" />
                                        
                                    </div>
                                    <div className={styles.byeBlock}>
                                        <p className={styles.ifNo}>нет в наличии</p>
                                        <p className={styles.summary}>{item.sum}</p>
                                    </div>
                                </div>
                                )
                        }
                    })}
                    
                </div>
               
            </div>
            
        </div>
    )
}

export default SecondBlock;