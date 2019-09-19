const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            likesCount: 12
        },
        {
            id: 2,
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
            likesCount: 1
        },
        {
            id: 3,
            text: 'Excepteur sint occaecat cupidatat non proident',
            likesCount: 11
        }
    ],
    newPostText: 'ldldldldldlddl !!!'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	};
};
export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	};
};

export default profileReducer;