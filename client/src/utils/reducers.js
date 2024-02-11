// import { UPDATE_POST, DELETE_POST, ADD_POST } from './actions';

// export const reducer = (state, action) => {
// 	switch (action.type) {
// 		case ADD_POST:
// 			return {
// 				...state,
// 				posts: [...action?.post],
// 			};
// 		case UPDATE_POST:
// 			return {
// 				...state,
// 				posts: [...action?.post],
// 			};
// 		case DELETE_POST:
// 			let newState = state.posts?.filter((post) => {
// 				return post._id !== action._id;
// 			});

// 			return {
// 				...state,
// 				posts: newState,
// 			};

// 		// Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
// 		// This saves us from a crash.
// 		default:
// 			return state;
// 	}
// };
