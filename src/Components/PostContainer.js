import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, fetchPostSuccess, fetchPostFail } from '../Redux';
import axios from 'axios';

function PostContainer() {
	const posts = useSelector((state) => state.post.posts);
	const loading = useSelector((state) => state.post.loading);
	const error = useSelector((state) => state.post.error);
	console.log(posts, loading, error);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
		axios
			.get('https://jsonplaceholder.typicode.com/posts/')
			.then((res) => {
				dispatch(fetchPostSuccess(res.data));
			})
			.catch((error) => {
				dispatch(fetchPostFail(error.message));
			});
	}, []);

	return (
		<div>
			<h1>Posts</h1>
            {posts.map((post) => 
                <li key={post.id}>{post.title}</li>
            )}
		</div>
	);
}

export default PostContainer;
