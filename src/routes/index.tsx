import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage } from 'pages';

export default function RoutesPages(): JSX.Element {
	return (
		<Routes>
			<Route path='/' element={<LoginPage />} />
			<Route path='/home' element={<HomePage />} />
		</Routes>
	);
}
