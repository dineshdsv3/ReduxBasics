import { FETCH_POSTS, FETCH_POSTS_SUCCES, FETCH_POSTS_FAIL } from './postTypes';

export const fetchPosts = () => {
	return {
		type: FETCH_POSTS,
	};
};

export const fetchPostSuccess = (users) => {
	return {
		type: FETCH_POSTS_SUCCES,
		payload: users,
	};
};

export const fetchPostFail = (error) => {
	return {
		type: FETCH_POSTS_FAIL,
		payload: error,
	};
};
