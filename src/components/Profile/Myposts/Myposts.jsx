
import React from "react";
import Post from "./Post/Post";
import s from "./Myposts.module.css";

const Myposts = () => {
    return (
        <div>
            <div>
                My posts
            </div>

            <textarea name="text" id="2" cols="10" rows="2"></textarea>
            <button className={s.button}>add</button>

            <Post massage='Hi' like='1' />
            <Post massage='Hello' like='7' />


        </div >
    );
}

export default Myposts;