import React from 'react';
import s from './Nav.module.css';


const Nav = () => {
    return (
        <nav className="nav">
            <div className={s.item}>
                <a href="/content">Profile</a>
            </div>
            <div className={s.item}>
                <a href="/dialogs">Messages</a>
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