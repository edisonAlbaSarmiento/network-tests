import { configureStore } from '@reduxjs/toolkit';
import userSlide from 'redux-service/services';
import postSlide from 'redux-service/services/post';

export default configureStore({
	reducer: {
		user: userSlide,
		post: postSlide,
	},
});
