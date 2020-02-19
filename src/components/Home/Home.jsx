import React from 'react';
import style from './Home.module.scss';

const Home = () => {
    let videoURL =  'http://thenewcode.com/assets/videos/polina.mp4'

    return (
        <div className={style.home}>
                <video className={style.video} autoPlay>
                    <track src={videoURL} kind="captions" type="video/mp4" />
                    <track src={videoURL} kind="captions" type="video/ogg" />
                </video>
                <div className={style.content}>
                    <p>peaky blinders</p>
                </div>
            </div> 
    )
}

export default Home;
