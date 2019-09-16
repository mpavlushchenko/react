import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
	_state: {
		profilePage: {
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
		},
		dialogsPage: {
			dialogs: [
				{
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
			messages: [
				{
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
			newMessageBody: ''
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

		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.profilePage = profileReducer(this._state.profilePage, action);

		this._callSubscriber(this._state);
	}
};

export default store;
window.store = store;
