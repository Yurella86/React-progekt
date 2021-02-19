
import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return (

        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59ja60vTtYcpcCyDPpN37GpNvRx1sP7DfRQ&usqp=CAU' alt="fxdghb" />

            <span>{props.massage}
                <span>
                    like{props.like}
                </span>
            </span>

        </div>

    );
}

export default Post;