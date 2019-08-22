import React from 'react';
import s from './Content.module.css';
import { addPost } from '../redux/state';


const Content = (props) => {

    let event = () => { alert('event') }

    return (
        <div className="content">
            <button onClick={event} ></button>
            <br />
            <div className={s.item}>

            </div>
        </div>
    )
}

export default Content;