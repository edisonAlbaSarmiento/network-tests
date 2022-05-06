import styled from 'styled-components';

const ContentMain = styled.div`
	background: white;
	box-shadow: -20px 20px 60px #bebebe, 20px -20px 60px #ffffff;
	border-radius: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2% 2%;
	margin: 3% 0 0 3%;
	width: 26%;
	@media (max-width: 1024px) {
		width: 100%;
		padding: 5%;
	}
`;

const ContentChildCard = styled.div`
	width: 100%;
`;

const ContentHeaderCard = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
	overflow-wrap: break-word;
	margin: 0 0 3%;
`;

const ContentImageCard = styled.img`
	width: 16%;
	height: 54px;
	border-radius: 16px;
	cursor: pointer;
`;

const ContentImagePostCard = styled.img`
	width: 43%;
	height: 195px;
	border-radius: 16px;
	@media (max-width: 1024px) {
		width: 100%;
		margin: 3% 0 4%;
	}
`;

const ContentChildBodyCard = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

const ContentChildFooterCard = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 10% 0 0%;
`;

const ContentTitleHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
`;

const ContentLikes = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 10%;
	align-items: center;
	cursor: pointer;
	@media (max-width: 1024px) {
		width: 15%;
	}
`;

const ContentText = styled.div`
	width: 54%;
	@media (max-width: 1024px) {
		width: 100%;
	}
`;

const ContentTags = styled.div`
	margin: 4% 0;
	display: flex;
	flex-wrap: wrap;
`;

const ContentTagItem = styled.div`
	background-color: #f44335;
	padding: 0.55rem;
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2%;
	width: 23%;
	cursor: pointer;
	@media (max-width: 1024px) {
		width: 25%;
	}
`;

export {
	ContentMain,
	ContentChildCard,
	ContentHeaderCard,
	ContentChildBodyCard,
	ContentChildFooterCard,
	ContentImageCard,
	ContentImagePostCard,
	ContentTitleHeader,
	ContentLikes,
	ContentText,
	ContentTags,
	ContentTagItem,
};
