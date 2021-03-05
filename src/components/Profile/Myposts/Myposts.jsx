
import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";



const MyPosts = (props) => {
    debugger
    let postElement = props.posts.map(p => <Post massage={p.message} like={p.likes} />);

    let newPostElement = React.createRef()

    let addPost = () => {
        props.newAddPost();
        props.updateNewPostText('')
    };

    let onPostOnChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea ref={newPostElement} onChange={onPostOnChange} value={props.newPostText} />
            </div>
            <div>
                <button className={s.button} onClick={addPost} >add</button>
            </div>

            {postElement}

        </div >
    );
}

export default MyPosts;