import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Dialogs from "./components/Dialogs";
import { Route } from "react-router-dom";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div>
                <Route path='/dialogs/' component={Dialogs} />
                <Route path='/content/' component={Content} />
            </div>
            </div>
  );
}


export default App;