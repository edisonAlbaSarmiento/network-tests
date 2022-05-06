import styled from 'styled-components';

const ContentToast = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: ${({ theme }) => theme.padding.paddingSmall};
	background-color: #f44335;
	border-radius: 16px;
	margin: 7% 0;
	@media (max-width: 1024px) {
		width: 100%;
	}
`;

const ContentIcon = styled.div`
	margin: 0 2%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { ContentToast, ContentIcon };
