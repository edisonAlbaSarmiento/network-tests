import { useNavigate } from 'react-router-dom';

function HomeTemplate(): JSX.Element {
	let navigate = useNavigate();

	return (
		<>
			<div>HOME TEMPLATE</div>
			<button onClick={() => navigate('/')}>login</button>
		</>
	);
}

export default HomeTemplate;
