import logo from './logo.svg';
import './App.css';
import { HomePage } from 'pages';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import RoutesPages from 'routes';

function App() {
	let navigate = useNavigate();

	return <RoutesPages />;
}

export default App;
