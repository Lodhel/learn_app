import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Dialogs from "./components/Dialogs";
import { Route } from "react-router-dom";
import { addPost } from './redux/state';

function App(props) {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div>
                <Route exact path='/dialogs/' render={() => <Dialogs dialogs={props.state.dialogs} />} />
                <Route path='/content/' component={() => <Content posts={props.state.posts} addPost={addPost} />} />
            </div>
            </div>
  );
}


export default App;