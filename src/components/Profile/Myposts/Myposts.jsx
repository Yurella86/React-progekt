
import React from "react";
import Post from "./Post/Post";
import s from "./Myposts.module.css";



const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.newAddPost(text);
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