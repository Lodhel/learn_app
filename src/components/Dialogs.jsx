import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div><NavLink to={path}>{props.name}</ NavLink></div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogitems}>
                <DialogItem name="Andrey" id="1" />
                <DialogItem name="Max" id="2" />
                <DialogItem name="Daria" id="3" />
            </div>

            <div className="messages">
                <div className={s.dialog}>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;