import React from 'react';
import style from './Content.module.scss';
import ProfileInfo from "./MyProfile/ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyProfile/MyPostsContainer';

const Content = (props) => {
  return (
    <main className={style.main}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store} />
    </main>
  )
};

export default Content;
