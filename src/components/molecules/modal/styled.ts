import styled from 'styled-components';

type ContentMainModalProps = {
	isOpen?: boolean;
};
const ContentMainModal = styled.div<ContentMainModalProps>`
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	position: fixed;
	justify-content: center;
	margin: 0 auto;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 100;
	overflow-x: hidden;
	background-color: rgba(31, 32, 41, 0.75);
	pointer-events: inherit;
	opacity: 1;
	transition: all 300ms ease-in-out;
	flex-direction: row;
	align-content: center;
	align-items: center;
`;

const Content = styled.div`
	z-index: 100;
	justify-content: center;
	align-content: center;
	display: flex;
	flex-direction: column;
	background-color: white;
	margin: auto;
	border-radius: 16px;
	padding: 1rem;
	position: absolute;
	align-items: center;
	width: 32%;
	max-height: calc(100% - 64px);
	@media (max-width: 1024px) {
		position: initial;
		width: 66%;
	}
`;

const ContentCloset = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	cursor: pointer;
`;

const ContentChilld = styled.div`
	width: 100%;
	overflow-y: auto;
`;

const ContentInfoModal = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	justify-content: flex-end;
`;

export {
	ContentMainModal,
	Content,
	ContentCloset,
	ContentChilld,
	ContentInfoModal,
};
