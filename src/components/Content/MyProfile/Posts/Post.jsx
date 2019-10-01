import React from 'react';
import style from './Post.module.scss';

const Post = (props) => {

  return (
    <div id={props.id}>
      <div className={style.item}>
        <div className={style.avatar}>

          <img src="https://wallpaperbro.com/img/416174.png" alt="avatar"/>
        </div>
        <div className={style.text}>{props.massage}</div>
      </div>
      <div className={style.like}>like
        <span>{props.countLike}</span>
      </div>
    </div>
  )
}

export default Post;
