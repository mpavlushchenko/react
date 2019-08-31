import React from 'react';
import style from './../Dialogs.module.scss';

const Message = (props) => {
    return(
        <div className={style.massage}>{props.message}</div>
    )
};

export default Message;
