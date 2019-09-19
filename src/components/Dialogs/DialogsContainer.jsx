import React from 'react';
import style from './Dialogs.module.scss';

import DialogItem from './DialogsItem/DialogItem';
import DialogMassage from './Message/Message';
import { updateNewMessageCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

    let addMessage = () => {
      props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageCreator(body));
    }

  return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={addMessage} dialogsPage={state} />);
};

export default DialogsContainer;
