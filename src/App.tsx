import { useEffect } from 'react';

import './App.css';
import RoutesPages from 'routes';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectIsLoggin } from 'redux-service/services';

function App() {
	const stateLoggin = useSelector<any>(selectIsLoggin);
	const navigate = useNavigate();

	useEffect(() => {
		if (stateLoggin) {
			navigate('/home');
		} else {
			navigate('/');
		}
	}, [navigate, stateLoggin]);

	return <RoutesPages />;
}

export default App;
