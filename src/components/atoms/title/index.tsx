import { Title } from './styled';

type TitleComponetProps = {
	color: string;
	variant: 'title' | 'subtitle' | 'textCards';
	fontSize: string;
	marginText: string;
	children: string;
};

const TitleComponet = (props: TitleComponetProps) => {
	const { color, variant, fontSize, marginText } = props;
	return (
		<Title
			color={color}
			variant={variant}
			fontSize={fontSize}
			marginText={marginText}>
			{props.children}
		</Title>
	);
};

TitleComponet.defaultProps = {
	color: '#7bf5b1',
	marginText: '0px',
};

export default TitleComponet;
