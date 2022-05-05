import styled from 'styled-components';

const MainContent = styled.div`
	margin: 1%;
	padding: ${({ theme }) => theme.padding.paddingSmall};
	background: white;
`;

const ContentHeader = styled.div``;

const ContentBody = styled.div`
	padding: ${({ theme }) => theme.padding.paddingSmall};
`;

export { MainContent, ContentHeader, ContentBody };
