import { MainContent, ContentHeader, ContentBody } from './styled';

type HomeTemplateProps = {
	header?: any;
	body?: any;
};
function HomeTemplate({ header, body }: HomeTemplateProps): JSX.Element {
	return (
		<MainContent>
			<ContentHeader>{header}</ContentHeader>
			<ContentBody>{body}</ContentBody>
		</MainContent>
	);
}

export default HomeTemplate;
