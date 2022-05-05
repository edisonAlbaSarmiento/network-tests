import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	getTodoAsync,
	addTodoAsync,
	showTodo,
} from 'redux-service/services/test';

type CardsInfoProps = {
	dataCard?: any;
};
export default function CardsInfo({ dataCard }: CardsInfoProps): JSX.Element {
	console.log('dataCard', dataCard);
	let navigate = useNavigate();

	const todo = useSelector(showTodo);
	const dispatch = useDispatch();
	const [newTodo, setNewTodo] = useState({
		userId: 69,
		id: 69,
		title: '',
		completed: false,
	});

	const addNewTodo = () => {
		dispatch<any>(addTodoAsync(newTodo));
	};
	return (
		<>
			<div>CardsInfo</div>

			<div className='App'>
				<h1>Hello CodeSandboxx</h1>
				<h2>Start editing to see some magic happen!</h2>
				<input
					onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
				/>
				<button onClick={addNewTodo}>Add new todo</button>
				{todo?.map((item: any) => {
					return <p key={item.id}>{item.title}</p>;
				})}
				<button onClick={() => dispatch<any>(getTodoAsync('5'))}>
					GET TODO
				</button>
			</div>
			<button onClick={() => navigate('/')}>login</button>
		</>
	);
}
