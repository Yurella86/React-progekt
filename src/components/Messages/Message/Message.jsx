
import React from "react";
import s from './Message.module.css';


const MessagesItems = (props) => {
    return <div className={s.message}>
        {props.message}
    </div>
};


export default MessagesItems;