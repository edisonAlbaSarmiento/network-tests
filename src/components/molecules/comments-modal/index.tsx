import { TitleComponet } from 'components/atoms';
import format from 'date-fns/format';
import { ContentComments, ContentImage, ContentDateComment } from './styled';

type CommentsProps = {
	comment?: any;
};
export default function Comments({ comment }: CommentsProps): JSX.Element {
	return (
		<ContentComments>
			<ContentImage src={`${comment?.owner?.picture}`} />
			<div>
				<TitleComponet variant='subtitle' fontSize='12' marginText='2% 0'>
					{`${comment?.owner?.firstName} ${comment?.owner?.lastName}`}
				</TitleComponet>
			</div>
			<div>
				<TitleComponet
					variant='subtitle'
					fontSize='12'
					marginText='2% 0'
					color='#9999'>
					Comment
				</TitleComponet>
				<TitleComponet variant='subtitle' fontSize='12' marginText='2% 0'>
					{comment?.message}
				</TitleComponet>
			</div>
			<ContentDateComment>
				<TitleComponet variant='subtitle' fontSize='12' marginText='2% 0'>
					Published
				</TitleComponet>
				<TitleComponet variant='subtitle' fontSize='0.90rem' color='#9999'>
					{format(new Date(`${comment?.publishDate}`), 'dd/MMMM/yyyy')}
				</TitleComponet>
			</ContentDateComment>
		</ContentComments>
	);
}
