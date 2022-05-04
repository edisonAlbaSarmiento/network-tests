import { MainContent, LeftContent, RightContent } from './styled';

type LoginTemplateProps = {
	rightImage?: string;
	leftContent?: any;
};

function LoginTemplate({
	rightImage,
	leftContent,
}: LoginTemplateProps): JSX.Element {
	return (
		<MainContent>
			<RightContent backgroundImage={rightImage} />
			<LeftContent>{leftContent}</LeftContent>
		</MainContent>
	);
}

export default LoginTemplate;
