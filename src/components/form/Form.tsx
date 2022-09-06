import * as React from "react";
import { ReactDOM } from "react";
import styles from "./Form.module.scss";
import {useState,useEffect} from "react";
import List from "../List/list";

function FormAdd() {
    const [count,setCount] = useState({});
    const [arrCount,setArrCount] = useState([]);
    useEffect( () => {
        renderDb();
      }, []);
    async function renderDb() {
        const responseArrCount = await fetch('http://localhost:3000/media/');
        const commits = await responseArrCount.json();
        setArrCount(commits);
    }


    async function postDB(objPot = count) {
        const response = await fetch('http://localhost:3000/media',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(objPot)
        });
        const responseArrCount = await fetch('http://localhost:3000/media/');
        let commits = await responseArrCount.json();
        setArrCount(commits);
    }
    async function deleteDbItem(itemId: number) {
        const response = await fetch(`http://localhost:3000/media/${itemId}`,{
            method: 'DELETE'
        });
    }
    async function updateDbStatus(itemId: number) { 
        const response = await fetch(`http://localhost:3000/media/${itemId}`);
        let item = await response.json();
        item['status'] == "done" ? console.log("ITS DONE!") : item['status'] = "done";
        await deleteDbItem(itemId);
        postDB(item); 

    }
    async function deleteAllDbItem() {
        const response = await fetch('http://localhost:3000/media/');
        const commits = await response.json();
        commits.map((item: number,index: number) => {
            const deleteResponse =  fetch(`http://localhost:3000/media/${item.id}`,{
            method: 'DELETE'
        });
        });
    }
    const handleSubmit: {} = (event: React.FormEvent<HTMLInputElement>) => {
        postDB();
        event.preventDefault();
        setTimeout(() => {setCount({}),500})
        setCount({title: '',time: '',status: 'not done'});
        sortArr();
    } 
    const updateArr = (index: number,itemId: number) => {
        setArrCount(arrCount.filter((_,i) => i !== index));
        deleteDbItem(itemId);
    }
    const clearList = () => {
        setArrCount([]);
        deleteAllDbItem();
    }
    const sortArr = () => {
        arrCount.sort((obj1, obj2) => {
            return obj1["id"]-obj2["id"];
          });
    }
    const handleChangeTitle:{} =(e: React.FormEvent<HTMLInputElement>) => {
        setCount(Object.assign(count,{title: e.currentTarget.value,status: 'not done'}));
    }
    const handleChangeTime: {} =(e: React.FormEvent<HTMLInputElement>) => {
        setCount(Object.assign(count,{time: e.currentTarget.value}));
    }
    const updateStatus = (index: number,itemId: number) => {
        updateDbStatus(itemId);
    }
    return(
       <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={count.time} onChange={handleChangeTime}/>
                <input type="text" value={count.title} onChange={handleChangeTitle}/>
                <button type="submit" >ADD</button>
            </form>
            <List clearData={clearList} updateStatus={updateStatus} updateData={updateArr} arr={arrCount}/>
            {/* <List/> */}
       </div>
    )
} 
export default FormAdd;