const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messages.push({
				id: 6,
				message: body
			});
			return state;
		default:
			return state;
	}
};

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE
});

export const updateNewMessageCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body
	};
};

export default dialogsReducer;
