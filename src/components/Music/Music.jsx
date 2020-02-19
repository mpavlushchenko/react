import React, { Component } from 'react';
import style from './Music.module.scss';

// const Music = () => {
//     let items = [];
//     var isResolved = false;
//     // var promise = new Promise( (resolve, reject) => {
//     //     setTimeout( () => {
//     //         if (true) {
//     //             resolve("Promise resolved successfully");
//     //         } else {
//     //             reject();
//     //         }
//     //     })
//     // });
//     //
//     // promise
//     //     .then( result => console.log(result))
//     //     .catch(() => console.log('error'))
//
//     fetch('http://jsonplaceholder.typicode.com/photos')
//         .then(response => response.json())
//         .then(result => result.slice(0, 20))
//         .then(data => {items.push(data)})
//         .then(function() {
//             isResolved = true;
//         })
//         .catch(error => {console.log('We had a problem in running processImage', error);});
//
//     console.log(isResolved);
//     return (
//         <div className={style.box}>
//             {items.map((element, index) => (
//                 <div className={style.item}>{element}</div>
//             ))}
//         </div>
//     )
//
// };

class Music extends Component {
    constructor(props) {
        super(props);

        this.state ={ data: {}, isFetching: true, error: null };
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(response => response.slice(0, 20))
            .then(result => this.setState({data: result, isFetching: false }))
            .catch(error => {
                this.setState({error});
                console.log(error);
            })
    }

    render() {
        const { data, isFetching, error } = this.state;
        if (isFetching) return <div>...Loading</div>;
        if (error) return <div>{`Error: ${error.message}`}</div>;

        return (
            <div className={style.box}>
                {data.map((element, index) => (
                    <div key={index} className={style.item}>
                        <img src={element.url} alt=""/>
                        <span>{element.title}</span>
                    </div>
                ))}
            </div>
        )
    }
}
export default Music;
