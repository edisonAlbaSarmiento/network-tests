import styled from 'styled-components';

const ContentMain = styled.div`
	border-radius: 50px;
	background: #e0e0e0;
	box-shadow: -20px 20px 60px #bebebe, 20px -20px 60px #ffffff;
	padding: ${({ theme }) => theme.padding.paddingSmall};
	border-radius: 16px;
`;

export { ContentMain };
