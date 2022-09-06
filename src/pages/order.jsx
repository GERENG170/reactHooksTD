import React from "react";
import styles from "./order/order.module.scss";
import al from "./arrayLast";
import arr12 from "../components/arr";
import arrName1 from "../components/arrName1";
import menu from "../components/manuMainArr";
import {Link} from 'react-router-dom'
import zzz from "../components/colItem"
let x1 = '';
let x2 = '';
let dataForOrder = () => {
arrName1.map((item,index)=>{
    x1 = item.name;
    x2 = item.number;
  })
}
class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',number: '',obj: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
        handleChange = (event) =>{
        this.setState({name: event.target.value});
      }
        handleNumberChange = (e) => {
        this.setState({number: e.target.value});
      }
        handleObjChange = (e) => {
        this.setState({obj: e.target.value});
      }
        

      scrolCatalog = () => {
        
      }
    
        handleSubmit(event) {
          
        alert('Отправленное ФИО: ' + this.state.name);
        alert('Отправленное number: ' + this.state.number);
        alert('Отправленное obj: ' + this.state.obj);

        event.preventDefault();
      }
      
      
      render() {
        {dataForOrder()};
          return(
        <div className={styles.conteinerForm}>
            <iframe className={styles.nameHolder} src="#" frameborder="" name="votar"></iframe>
            <form className={styles.mainOrder} method="post" target="votar" action="./qwe.php">
                <label className={styles.Label}>
                <p className={styles.namePageKorz}>Подтвердите заказ</p>
                <p className={styles.predupKorz}>Отправьте заявку на заказ. В ближайшее время наш менеджер свяжется с вами для подтверждения заказа. Оплата только при получении. Так-же можете написать нам в наш instagram-магазин для заказа товара. Спасибо =)</p>
                    <div className={styles.titleKorzName}>
                      <p className={styles.tagPName}>ФИО</p>
                      
                      <input id="nH1" className={styles.nameHolder} type="text"  name="name" value={this.state.name}  onChange={this.handleChange} placeholder={x1}></input>
                    </div>
                    <div className={styles.numberKorz}>
                      <p className={styles.tagPNumber}>номер телефона</p>
                      <input id = "nH2" className={styles.numberHolder} type="text"  name="phone" value={this.state.number} onChange={this.handleNumberChange} placeholder={x2}></input>
                    </div>
                    <ul id="outVision2" className={styles.outVisionClass} >
                        <p className={styles.neZnayChto}>{zzz.unshift(al.length)}</p>
                        i
                        {al.map((item,index) => {
                          return(
                            
                            <div className={styles.korzItem}> 
                              <li className={styles.liKorz}>
                                <img className={styles.imgOrder} src={require(`../components/img/${item.img}`)} alt="" />
                                <h2 className={styles.itemNameOrder}>{item.name}</h2>
                                <p className={styles.txtItemKorz}>{item.txt}</p>
                                </li>
                              </div>
                          )
                          
                        })}
                    </ul>
                    <Link to="/" onClick={() => {al.splice(0,al.length);
                    arr12.splice(0,arr12.length);
                    zzz.splice(0,zzz.length);
                    }} className={styles.LinkBtnDel}>очистить корзину</Link>
                    <input  type="text" className={styles.hidenOut0} id="hidenOut2" value={arr12}  name="obj" onChange={this.handleObjChange}></input>
                    <Link to="/"  type="button" className={styles.changeObjBtn} ><a  href="#catalogScroll">Добавить товар</a></Link>
                </label>
                <button type="submit" value="Отправить" onClick={()=>{
                  let elem1 = document.getElementById('nH1');
                  let elem2 = document.getElementById('nH2');
                  if(elem1.value == ''){
                    arrName1.map((item,index)=> {
                      elem1.value = item.name;
                    })
                  }
                  if(elem2.value == ''){
                    arrName1.map((item,index)=> {
                      elem2.value = item.number;
                    })
                  }
                  if(elem1.value.length != 0 && elem2.value.length != 0){
                  let elem3 = document.getElementById('hidenOut2');
                  elem3.value = arr12;
                  
                  window.location.href = '/';}
                  else{alert("ERROR");
                    elem1.style.border = "2px solid #FF4D4D";
                    elem1.style.boxShadow = "0 0 10px #FF4D4D, 0 0 40px";
                    elem2.style.border = "2px solid #FF4D4D";
                    elem2.style.boxShadow = "0 0 10px #FF4D4D, 0 0 40px";
                    alert("Заполните все поля!");
                  }
                  
                }} className={styles.submitSend} id="bnm">Отправить заявку</button>
              
                <input type="hidden" name="act" value="order"></input>
            </form>
            
        </div>
    );
}
}

export default Order;