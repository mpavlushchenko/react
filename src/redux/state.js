const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';




let store = {
	_state: {
		profilePage: {
			posts: [{
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
		},
		dialogsPage: {
			dialogs: [{
					id: 1,
					name: 'Maksym'
				},
				{
					id: 2,
					name: 'Dastyn'
				},
				{
					id: 3,
					name: 'Bob'
				},
				{
					id: 4,
					name: 'Karl'
				},
				{
					id: 5,
					name: 'Anton'
				}
			],
			messages: [{
					id: 1,
					message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				},
				{
					id: 2,
					message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore '
				},
				{
					id: 3,
					message: 'Excepteur sint occaecat cupidatat non proident'
				},
				{
					id: 4,
					message: 'Lorem ipsum dolor sit amet'
				},
				{
					id: 5,
					message: 'Excepteur sint occaecat cupidatat non proident'
				}
			],
			newMessageBody: ""
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('state');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				text: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY){
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE){
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({ id: 6, message: body});
			this._callSubscriber(this._state);
		}
	}
};

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}
export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
}

export const sendMessageCreator = () =>  ({type: SEND_MESSAGE })

export const updateNewMessageCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	}
}

export default store;
window.store = store;