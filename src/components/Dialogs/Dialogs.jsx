import React from 'react';
import style from './Dialogs.module.scss';

import DialogItem from './DialogsItem/DialogItem';
import DialogMassage from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements =
        props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements =
        props.messages.map( message => <DialogMassage message={message.message} id={message.id} />);

    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    };

  return (
    <div className={style.dialogs}>
      <div className={style.items}>
          {dialogsElements}
      </div>
      <div className={style.massages}>
        {messagesElements}
          <div className={style['inner-text']}>
              <textarea ref={newMessage}></textarea>
              <div className={style.btn}>
                  <button onClick={ addMessage }>send</button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
