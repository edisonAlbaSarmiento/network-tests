import styled from 'styled-components';

type TitleProps = {
	fontSize?: string;
	marginText?: string;
	variant?: string;
	alignText?: boolean;
};

export const Title = styled.p<TitleProps>`
	color: ${({ color }) => color};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '58px')};
	font-weight: ${({ variant }) =>
		(variant === 'title' && 'bold') || (variant === 'subtitle' && 'normal')};
	margin: ${({ marginText }) => marginText};
	line-height: 1;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	text-align: ${({ alignText }) => (alignText ? 'center' : 'normal')};
	@media (max-width: 768px) {
		font-size: ${({ variant }) =>
			(variant === 'title' && '34px') ||
			(variant === 'textCards' && '20px') ||
			(variant === 'subtitle' && '16px')};
	}
`;
