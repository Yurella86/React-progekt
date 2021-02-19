import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Messages from "./components/Messages/Messages";
import Profile from './components/Profile/Profile';
import Right from './components/Right/Right';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <div className='header'>
        <Header />
        <Sidebar />

        <div className='app-wrapper-content'>

          <Route path='/profile' component={Profile} />
          <Route path='/message' component={Messages} />

        </div>

        <Right />
        <Footer />
      </div >
    </BrowserRouter>
  );
}



export default App;
