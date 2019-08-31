import React from 'react';
import style from './Friends.module.scss';

const Friends = () => {
    return (
        <div className={style.friends}>
            <div className={style.title}>Friends</div>
            <div className={style.items}>
                <div className={style.friend}>
                    <img src="https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=620,413" alt=""/>
                </div>
                <div className={style.friend}>
                    <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_860,w_1529,x_54,y_0/f_auto,q_auto,w_1100/v1554826525/shape/mentalfloss/nedflanders_1692813.jpg" alt=""/>
                </div>
                <div className={style.friend}>
                    <img src="https://cdn.cnn.com/cnnnext/dam/assets/171114074429-underrepresented-apu-exlarge-16-9.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
};

export default Friends;
