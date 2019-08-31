import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Posts/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( post => <Post massage={post.text} countLike={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updatePost('');
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
    };

  return (
    <div>
      <div className={style.comment}>
        <h1>My posts</h1>
        <textarea onChange={onPostChange} ref={newPostElement} rows="10" value={props.newPostText}/>

        <div className={style.btn}>
          <button onClick={ addPost }>send</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;
