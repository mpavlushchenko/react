import React from 'react';
import MyPosts from './MyProfile/MyPosts';
import style from './Content.module.scss';
import ProfileInfo from "./MyProfile/ProfileInfo/ProfileInfo";

const Content = (props) => {
    return (
        <main className={style.main}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updatePost={props.updatePost}
            />
        </main>
    )
};

export default Content;
