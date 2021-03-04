import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return <div className={s.dialog}>
        <NavLink to={"/message/" + props.id}> {props.name} </NavLink>
    </div>
};


export default DialogItem;