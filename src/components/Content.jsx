import React from 'react';
import s from './Content.module.css';


const Content = () => {

    let event = () => { alert('event') }

    return (
        <div className="content">
            <button onClick={event} ></button>
            <br />
            <img src="https://avatars.mds.yandex.net/get-pdb/906476/cf6e4972-9a6d-465f-b197-fddcd75f5b48/s1200?webp=false" />
            <div className={s.item}> ava + desc. </div>
            <div className={s.item}> my post </div>
            <div className={s.item}> new post </div>
            <div className={s.item}>post </div>
        </div>
    )
}

export default Content;