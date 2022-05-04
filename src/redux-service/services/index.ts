import axios from 'axios';

const urlMain = 'https://dummyapi.io/data/v1';
const endpoints = {
	createUser: '/user/create',
	getDataByUserLogin: 'user/:id',
	getByAllPost: '/post',
	filterByTag: '/tag/:id/post',
	showCommentPost: '/post/:id/comment',
	getDataByUserPost: 'user/:id',
};

interface createUserRequest {
	firstName: string;
	lastName: string;
	email: string;
}
const createUser = async ({
	firstName,
	lastName,
	email,
}: createUserRequest) => {
	console.info([firstName, lastName, email]);
	await axios({
		method: 'post',
		url: endpoints.createUser,
		data: {
			firstName: 'Edison',
			lastName: 'Alba',
			email: 'edison.alba@test.com',
		},
	}).then((res: any) => {
		console.log('Create user', res);
	});
};

export { createUser };
