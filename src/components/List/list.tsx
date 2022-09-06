import * as React from "react";
import { ReactDOM } from "react";
import {useState} from "react";
import styles from "./List.module.scss";
function List(props: {}) {
    props.arr.sort((obj1, obj2) => {
        return obj1["id"]-obj2["id"];
      });
    return(
        <div className={styles.mainList}>
            <h1>LIST</h1>
            <button onClick={() => {props.clearData()}}>clear list</button>
            {props.arr.map((item,indx) => {
                return (
                    <div>
                        <p>time {item.time}</p>
                        <p>title {item.title}</p>
                        <p>{item.status}</p>
                        <p>{item.id}</p>
                        <button onClick={() => {props.updateData(indx,item.id)}}>delete</button>
                        <button onClick={() => {props.updateStatus(indx,item.id)}}>done</button>
                    </div>
                )
            })
            }
        </div>
    )
}
export default List;