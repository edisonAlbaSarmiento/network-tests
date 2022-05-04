import { Title } from './styled';

type TitleComponetProps = {
	color?: string;
	variant: 'title' | 'subtitle' | 'textCards';
	fontSize: string;
	marginText?: string;
	children?: string;
	alignText?: boolean;
};

const TitleComponet = ({
	color = 'black',
	variant,
	fontSize,
	marginText = '0px',
	children,
	alignText = false,
}: TitleComponetProps) => {
	return (
		<Title
			color={color}
			variant={variant}
			fontSize={fontSize}
			marginText={marginText}
			alignText={alignText}>
			{children}
		</Title>
	);
};

export default TitleComponet;
