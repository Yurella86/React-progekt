import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import { newAddPost } from "./redux/state";
import { subscribe } from "./redux/state";
import { updateNewPostText } from "./redux/state";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        newAddPost={newAddPost}
        updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderEntireTree(state);
subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
