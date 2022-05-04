import { configureStore } from '@reduxjs/toolkit';
import todoSlide from 'redux-service/services/test';
import userSlide from 'redux-service/services';

// export const store = configureStore({
// 	reducer: {
// 		shopping: shoppingReducer,
// 		category: categoryReducer,
// 	},
// });

export default configureStore({
	reducer: {
		todo: todoSlide,
		user: userSlide,
		getDataByUserLoginData: todoSlide,
		getByAllPostData: todoSlide,
		filterByTag: todoSlide,
		showCommentPost: todoSlide,
		getDataByUserPost: todoSlide,
	},
});
