import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="nav">
            <div className={s.item}>
                <NavLink to="/content">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div><div className={s.item}>
                <a href="#">News</a>
            </div><div className={s.item}>
                <a href="#">Media</a>
            </div><div className={s.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Nav;