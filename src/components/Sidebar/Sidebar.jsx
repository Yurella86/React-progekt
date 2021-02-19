
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={`${s.sidebar} ${s.shadow}`} >
            <div className={s.Yurella}>
                Yurella
            </div>
            <div><NavLink to='/profile'> Profile </NavLink></div>
            <div><NavLink to='/message'> Messages </NavLink></div>
            <div><NavLink to='/news'> News</NavLink></div>
            <div><NavLink to='/music'> Music </NavLink></div>
            <div><NavLink to='/settings'>Settings</NavLink></div>
        </div >
    );
}

export default Sidebar;