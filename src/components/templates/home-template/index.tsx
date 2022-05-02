import { Link } from 'react-router-dom';

function HomeTemplate(): JSX.Element {
	return (
		<>
			<div>HOME TEMPLATE</div>
			<Link to='/'>LOGIN</Link>
		</>
	);
}

export default HomeTemplate;
