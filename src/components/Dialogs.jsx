import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogitems}>
                <div className={s.dialog + ' ' + s.active}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    <p>Max</p>
                </div>
            <div className={s.dialog}>
                    <p>Daria</p>
                </div>
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