
import React from "react";
import s from "./Friends.module.css";



const Friends = (props) => {

    return (
        <div className={s.friendsItem}>
            <div>
                <div className={s.image}>
                    <img src={props.img} />
                </div>
                <div className={s.name}>{props.name}</div>
            </div>
        </div>
    )
}

export default Friends;