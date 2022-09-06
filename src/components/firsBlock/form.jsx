import React from "react";
import styles from "./form/form.module.scss";
import {Link} from "react-router-dom"
import arrName1 from "../arrName1";
import zzz from "../colItem";
class Form extends React.Component {
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
        
          return(
            
        <div className={styles.conteinerForm}>
            <p>заказать</p>
            <iframe src="#" frameborder="" name="votar"></iframe>
            <form className="mainFormAjax" method="" target="votar" action="">
                <label>
                    
                    <input type="text" id="inputFormMain1" value={this.state.name} name="name"  onChange={this.handleChange} placeholder="ВВЕДИТЕ ВАШЕ ФИО"/>
                    <input type="text" id="inputFormMain2" value={this.state.number} name="phone" onChange={this.handleNumberChange} placeholder="ВВЕДИТЕ ВАШ НОМЕР ТЕЛЕФОНА" />
                    <input type="text" className={styles.hidenOutO} id="hidenOut" value={this.state.obj} name="obj" onChange={this.handleObjChange}></input>
                    <button type="button" className={styles.changeObjBtn} onClick={()=>{window.location.href = '#catalogScroll'}}><a  href="#catalogScroll">Выбрать товар</a></button>
                    <Link to = '/order' id="submitSendId" className={styles.submitSend} onClick={()=> {
                      arrName1.splice(0,1,
                        {
                          name: this.state.name,
                          number: this.state.number,
                        }
                      );
                    }
                    }>ПЕРЕЙТИ В КОРЗИНУ {zzz[0]}</Link>
                <input type="hidden" name="act" value="order"></input>
                <p id="outVision"></p>
                </label>
                
            </form>
        </div>
    );
}
}

export default Form;