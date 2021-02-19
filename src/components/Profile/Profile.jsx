
import React from "react";
import Myposts from "./Myposts/Myposts";
import s from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={`${s.content} ${s.shadow}`}>
            <div>
                <img src='https://www.pics4learning.com/images/pics-banner1-1300.jpg' alt="fgdbgf" />
            </div>
            <div>
                ava + descripshn
            </div>
            <Myposts />
        </div >
    );
}

export default Profile;