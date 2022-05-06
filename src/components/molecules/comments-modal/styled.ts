import styled from 'styled-components';

const ContentMain = styled.div`
	width: 100%;
`;

const ContentComments = styled.div`
	margin: 5% 0 2%;
	padding: 5%;
	border-radius: 16px;
	overflow-wrap: break-word;
	background: white;
	border-radius: 16px;
`;

const ContentImage = styled.img`
	border-radius: 16px;
`;

const ContentDateComment = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	align-items: center;
	justify-content: space-between;
`;

export { ContentMain, ContentComments, ContentImage, ContentDateComment };
