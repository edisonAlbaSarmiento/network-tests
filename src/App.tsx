import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from 'pages';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import RoutesPages from 'routes';
import app from 'utils/firebase';

function App() {
	let navigate = useNavigate();
	useEffect(() => {
		console.log(app);
	});

	return <RoutesPages />;
}

export default App;
