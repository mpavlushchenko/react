let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('state');
    },
    addPost () {
        debugger;
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updatePost (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    
    subscribe (observer) {
        this._callSubscriber = observer;
    }
};

export default store;
window.store = store;
