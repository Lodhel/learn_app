import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <Content />
        </div>
  );
}


export default App;