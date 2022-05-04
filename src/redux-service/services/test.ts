import { createSlice } from '@reduxjs/toolkit';
const axios = require('axios');
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const todoSlide = createSlice({
	name: 'todo',
	initialState: {
		data: [],
	},
	reducers: {
		addTodo: (state: any, action: any) => {
			state.data.push(action.payload);
		},
		getTodo: (state: any, action: any) => {
			state.data = [action.payload];
		},
	},
});

export const getTodoAsync = (data: any) => async (dispatch: any) => {
	try {
		const response = await axios.get(`${API_URL}/${data}`);
		dispatch(getTodo(response.data));
	} catch (err) {
		console.log('ERROR', err);
	}
};

export const addTodoAsync = (data: any) => async (dispatch: any) => {
	try {
		// console.log(data);
		const response = await axios.post(API_URL, data);
		// console.log(response);
		dispatch(addTodo(response.data));
	} catch (err: any) {
		console.log('ERROR', err);
	}
};

export const { addTodo, getTodo }: any = todoSlide.actions;
export const showTodo = (state: any) => state.todo.data;
export default todoSlide.reducer;
