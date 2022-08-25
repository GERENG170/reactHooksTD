import * as React from "react";
import { ReactDOM } from "react";

function List(props: {}) {

    // const removeItem = () => {
    //     props.updateData()
    // }
    return(
        props.arr.map((item,indx) => {
            return (
                <div>
                    <p>time {item.time}</p>
                    <p>title {item.title}</p>
                    <p>{item.status}</p>
                    <button onClick={() => {props.updateData(indx)}}>delete</button>
                    <button onClick={() => {props.updateStatus(indx)}}>done</button>
                </div>
                
            )
        })

    )
        
    
}

export default List;