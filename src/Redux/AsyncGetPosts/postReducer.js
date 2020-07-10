import { FETCH_POSTS, FETCH_POSTS_SUCCES, FETCH_POSTS_FAIL } from './postTypes';

const initialState = {
	loading: true,
	posts: [],
	error: '',
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				loading: false,
			};
		case FETCH_POSTS_SUCCES:
			return {
				...state,
                loading: false,
                posts: action.payload
            };
        case FETCH_POSTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
		default:
			return state;
	}
};


export default postReducer;
