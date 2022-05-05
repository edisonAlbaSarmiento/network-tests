import styled from 'styled-components';

const ButtonCustom = styled.button`
	background-color: #111827;
	border: 1px solid transparent;
	border-radius: 0.75rem;
	box-sizing: border-box;
	color: #ffffff;
	cursor: pointer;
	font-family: 'Inter var', ui-sans-serif, system-ui, -apple-system, system-ui,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 1.5rem;
	padding: 0.75rem 1.2rem;
	text-align: center;
	text-decoration: none #6b7280 solid;
	width: auto;
	height: 43px;
	display: flex;
	align-items: center;
	justify-content: center;
	:hover {
		background-color: #374151;
	}
	:focus {
		box-shadow: none;
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
	@media (max-width: 1024px) {
		width: 25%;
		padding: 0.2rem 0.3rem;
		font-size: 13px;
	}
`;

export { ButtonCustom };
