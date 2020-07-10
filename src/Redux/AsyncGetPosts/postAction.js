import { FETCH_POSTS, FETCH_POSTS_SUCCES, FETCH_POSTS_FAIL } from './postTypes';
import axios from 'axios';

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

export const fetchUsers = () => {
	return  (dispatch)  => {
		dispatch(fetchPosts());
		axios
			.get('https://jsonplaceholder.typicode.com/posts/')
			.then((res) => {
				dispatch(fetchPostSuccess(res.data));
			})
			.catch((error) => {
				dispatch(fetchPostFail(error.message));
			});
	}
}