
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dialogs from "./components/Messages/Dialogs";
import Profile from './components/Profile/Profile';
import Right from './components/Right/Right';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
  return (<BrowserRouter>
    <div className='header'>
      <Header />
      <Sidebar />
      <div className='app-wrapper-content'>

        <Route path='/profile'
          component={() => <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />

        <Route path='/message'
          component={() => <Dialogs dialogsPage={props.state.dialogsPage} />} />

      </div>

      <Right />
      <Footer />
    </div >
  </BrowserRouter>
  );
}



export default App;
