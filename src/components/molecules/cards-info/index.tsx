import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	getTodoAsync,
	addTodoAsync,
	showTodo,
} from 'redux-service/services/test';

type CardsInfoProps = {
	dataCardItem?: any;
};
export default function CardsInfo({
	dataCardItem,
}: CardsInfoProps): JSX.Element {
	console.log('dataCardItem', dataCardItem);
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
		</>
	);
}
