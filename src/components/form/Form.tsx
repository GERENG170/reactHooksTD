import * as React from "react";
import { ReactDOM } from "react";
import styles from "./Form.module.scss";
import {useState} from "react";
import List from "../List/list";
function FormAdd() {
    const [count,setCount] = useState({});
    const [arrCount,setArrCount] = useState([]);


    const handleSubmit: {} = (event) => {
        event.preventDefault();
        setArrCount([...arrCount,count]);
        setTimeout(() => {setCount({}),500})
        setCount({title: '',time: '',status: 'not done'});
    }
    const updateArr = (index) => {
        setArrCount(arrCount.filter((_,i) => i !== index));
    }
    const handleChangeTitle:{} =(e) => {
        setCount(Object.assign(count,{title: e.target.value,status: 'not done'}));
    }
    const handleChangeTime: {} =(e) => {
        setCount(Object.assign(count,{time: e.target.value}));
    }
    const updateStatus = (index) => {
        setArrCount([
            ...arrCount.map((item,ind) =>
            ind == index && item.status == 'not done' ? {...item, status: 'done'} : ind == index && item.status == 'done' ? {...item, status: 'not done'} : ind != index && item.status == 'done' ? {...item, status: 'done'} : {...item, status: 'not done'}
            
            )
        ])
    }
        
    return(
       <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={count.time} onChange={handleChangeTime}/>
                <input type="text" value={count.title} onChange={handleChangeTitle}/>
                <button type="submit" >ADD</button>
            </form>
            <List updateStatus={updateStatus} updateData={updateArr} arr={arrCount}/>
       </div>
       
    )
} 

export default FormAdd;