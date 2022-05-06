import styled from 'styled-components';

const ContentMain = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
`;

const ContentTagActive = styled.div`
	background-color: #f44335;
	padding: 0.55rem;
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 3% 0 0;
	width: 17%;
	flex-direction: row;
	cursor: pointer;
	@media (max-width: 1024px) {
		width: 79%;
		margin: 4%;
	}
`;

const CloseTag = styled.div``;

export { ContentMain, ContentTagActive, CloseTag };
