import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Dialogs from "./components/Dialogs";
import { BrowserRouter, Router } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div>
                <Router component={Content} />
                <Router component={Dialogs} />
            </div>
            </div>
        </BrowserRouter>
  );
}


export default App;