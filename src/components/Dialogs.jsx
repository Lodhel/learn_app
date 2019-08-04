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

    let dialogElements = props.dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} />
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogitems}>
                {dialogElements}
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