import { useNavigate } from 'react-router-dom';

function LoginPage() {
	let navigate = useNavigate();

	return (
		<>
			<div>Login TEMPLATE</div>
			<button onClick={() => navigate('/home')}>home</button>
		</>
	);
}

export default LoginPage;
