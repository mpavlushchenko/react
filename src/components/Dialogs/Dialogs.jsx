import React from 'react';
import style from './Dialogs.module.scss';

import DialogItem from './DialogsItem/DialogItem';
import DialogMassage from './Message/Message';
import { updateNewMessageCreator, sendMessageCreator } from '../../redux/state';

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

    let dialogsElements =
      state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements =
      state.messages.map( message => <DialogMassage message={message.message} id={message.id} />);

    let newMessageBody = state.newMessageBody;

    let addMessage = () => {
      props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageCreator(body));
    }

  return (
    <div className={style.dialogs}>
      <div className={style.items}>
          {dialogsElements}
      </div>
      <div className={style.massages}>
        {messagesElements}
          <div className={style['inner-text']}>
              <textarea value={newMessageBody} 
                        onChange={onNewMessageChange}>
              </textarea>
                        
              <div className={style.btn}>
                  <button onClick={ addMessage }>send</button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Dialogs;
