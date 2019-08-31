import React, {Component} from 'react';
import style from './Home.module.scss';

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'http://thenewcode.com/assets/videos/polina.mp4'
        }
    }

    render () {
        return (
            <div className={style.home}>
                <video className={style.video} loop autoPlay>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <div className={style.content}>
                    <p>peaky blinders</p>
                </div>
            </div>
        )
    }
}

export default Home;
