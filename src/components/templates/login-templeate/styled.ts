import styled from 'styled-components';

const MainContent = styled.div`
	display: flex;
	flex-direction: row;
	padding: ${({ theme }) => theme.padding.paddingSmall};
`;

const LeftContent = styled.div`
	width: 100%;
	background: white;
	height: 800px;
	@media (max-width: 1024px) {
		height: auto;
	}
`;

type RightContentProps = {
	backgroundImage?: string;
};
const RightContent = styled.div<RightContentProps>`
	background: ${({ backgroundImage }) =>
		backgroundImage
			? `lightblue url(${backgroundImage}) no-repeat fixed center`
			: 'red'};
	width: 100%;
	height: 800px;
	@media (max-width: 1024px) {
		display: none;
	}
`;

export { MainContent, LeftContent, RightContent };
