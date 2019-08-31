import {rerender} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', likesCount: 12},
            {id: 2, text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore', likesCount: 1},
            {id: 3, text: 'Excepteur sint occaecat cupidatat non proident', likesCount: 11}
        ],
        newPostText: "ldldldldldlddl !!!"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Maksym'},
            {id: 2, name: 'Dastyn'},
            {id: 3, name: 'Bob'},
            {id: 4, name: 'Karl'},
            {id: 5, name: 'Anton'}
        ],
        messages: [
            {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
            {id: 2, message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore '},
            {id: 3, message: 'Excepteur sint occaecat cupidatat non proident'},
            {id: 4, message: 'Lorem ipsum dolor sit amet'},
            {id: 5, message: 'Excepteur sint occaecat cupidatat non proident'}
        ]
    },
    sidebar: {}
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        text: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerender(state);
};

export let updatePost = (newText) => {
    state.profilePage.newPostText = newText;
    rerender(state);
};

export default state;
