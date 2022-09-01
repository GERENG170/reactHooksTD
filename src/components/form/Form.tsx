import * as React from "react";
import { ReactDOM } from "react";
import styles from "./Form.module.scss";
import {useState} from "react";
import List from "../List/list";
function FormAdd() {
    const [count,setCount] = useState({});
    const [arrCount,setArrCount] = useState([]);
    // async () => {
    //     const responseArrCount = await fetch('http://localhost:3000/media/');
    //     let commits = await responseArrCount.json();
    //     setArrCount(commits);
    // }
    async function postDB() {
        console.log("qwe");
        const response = await fetch('http://localhost:3000/media',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(count)
        });
        let result = await response.json();
        const responseArrCount = await fetch('http://localhost:3000/media/');
        let commits = await responseArrCount.json();
        setArrCount(commits);
        
    }
    async function deleteDbItem(itemId) {
        const response = await fetch(`http://localhost:3000/media/${itemId}`,{
            method: 'DELETE'
        });
    }
    async function deleteAllDbItem() {
        const response = await fetch('http://localhost:3000/media/');
        const commits = await response.json();
        commits.map((item,index) => {
            const deleteResponse =  fetch(`http://localhost:3000/media/${item.id}`,{
            method: 'DELETE'
        });
        });
    }



    const handleSubmit: {} = (event) => {
        postDB();
        // alertAll();
        event.preventDefault();
        setTimeout(() => {setCount({}),500})
        setCount({title: '',time: '',status: 'not done'});
        
    }
    
    const updateArr = (index,itemId) => {
        setArrCount(arrCount.filter((_,i) => i !== index));
        deleteDbItem(itemId);
    }
    const clearList = () => {
        setArrCount([]);
        deleteAllDbItem();

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
            <List clearData={clearList} updateStatus={updateStatus} updateData={updateArr} arr={arrCount}/>
       </div>
       
    )
} 

export default FormAdd;