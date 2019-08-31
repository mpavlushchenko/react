import React from 'react';
import style from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {

  return (
    <div className={style.comment}>
        <div className={style['head-image']}>
            <img alt="back-img" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F1-office-1516329_1920-1200x299.jpg" />
        </div>
        <div className={style.about}>
            <div className={style.image}>
                <img src="http://ekladata.com/3ynVnqIJRkaX_fAotZ-UDjGUbIM.gif" alt="me"/>
            </div>
            <div className={style.address}>
                <div className="full-name">Max Pavlushchenko</div>
                <div className="birthday">11.06.1995</div>
                <div className="home-address">City: Lviv</div>
            </div>
        </div>
    </div>
  )
};

export default ProfileInfo;
