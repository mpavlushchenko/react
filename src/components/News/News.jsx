import React from 'react';
import style from './News.module.scss';

const News = () => {
    return (
        <div className={style.container}>
            <div className={style.item1}>1</div>
            <div className={style.item2}>2</div>
            <div className={style.item3}>3</div>
            <div className={style.item4}>4</div>
            <div className={style.item5}>5</div>
        </div>
    )
}

export default News;