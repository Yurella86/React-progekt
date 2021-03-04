
import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";



const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        debugger
        let text = newPostElement.current.value;
        props.addPost(text);
    };


    let postElement = props.posts.map(p => <Post massage={p.message} like={p.likes} />);

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea
                    ref={newPostElement}
                ></textarea>
            </div>
            <div>
                <button className={s.button} onClick={addPost} >add</button>
            </div>

            {postElement}

        </div >
    );
}

export default MyPosts;