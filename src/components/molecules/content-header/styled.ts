import styled from 'styled-components';

const ContentMain = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

const ContentChild = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	@media (max-width: 1024px) {
		width: 100%;
		flex-direction: column;
		padding: 2% 0;
	}
`;
const ImagenProfile = styled.img`
	width: 5%;
	border-radius: 16px;
	@media (max-width: 1024px) {
		width: 25%;
	}
`;

const ContentTextName = styled.div`
	width: 15%;
	overflow-wrap: break-word;
	padding: 0 0% 2%;
	@media (max-width: 1024px) {
		width: 100%;
	}
`;
const ContentTextEmail = styled.div`
	width: 28%;
	overflow-wrap: break-word;
	padding: 0 0% 2%;
	@media (max-width: 1024px) {
		width: 100%;
	}
`;

export {
	ContentMain,
	ImagenProfile,
	ContentChild,
	ContentTextName,
	ContentTextEmail,
};
