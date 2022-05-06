import { TitleComponet } from 'components/atoms';
import { FcLike } from 'react-icons/fc';
import { FaComments } from 'react-icons/fa';
import {
	ContentMain,
	ContentChildCard,
	ContentChildBodyCard,
	ContentHeaderCard,
	ContentChildFooterCard,
	ContentImageCard,
	ContentImagePostCard,
	ContentTitleHeader,
	ContentLikes,
	ContentText,
	ContentTags,
	ContentTagItem,
} from './styled';
import { Key } from 'react';
import format from 'date-fns/format';

type CardsInfoProps = {
	dataCardItem?: any;
	onShowDataUserAction?: () => void;
	onShowCommentsAction?: () => void;
	key: Key | null | undefined;
	onSelectTagAction?: any;
};
export default function CardsInfo({
	dataCardItem,
	onShowDataUserAction,
	onShowCommentsAction,
	key,
	onSelectTagAction,
}: CardsInfoProps): JSX.Element {
	return (
		<ContentMain key={key}>
			<ContentChildCard>
				<ContentHeaderCard>
					<ContentImageCard
						src={`${dataCardItem?.owner?.picture}`}
						onClick={onShowDataUserAction}
					/>
					<ContentTitleHeader>
						<TitleComponet variant='subtitle' fontSize='20px'>
							{`${dataCardItem?.owner?.firstName} ${dataCardItem?.owner?.lastName}`}
						</TitleComponet>
						<TitleComponet variant='subtitle' fontSize='20px' color='#9999'>
							{`Published: ${format(
								new Date(`${dataCardItem?.publishDate}`),
								'dd/MMMM/yyyy',
							)}`}
						</TitleComponet>
					</ContentTitleHeader>
				</ContentHeaderCard>
				<ContentChildBodyCard>
					<ContentImagePostCard src={`${dataCardItem?.image}`} />
					<ContentText>
						<TitleComponet variant='textCards' fontSize='20px'>
							{dataCardItem?.text}
						</TitleComponet>
					</ContentText>
				</ContentChildBodyCard>
				<ContentTags>
					{dataCardItem?.tags.map((tag: string) => (
						<ContentTagItem onClick={() => onSelectTagAction(tag)}>
							<TitleComponet variant='textCards' fontSize='12px' color='white'>
								{tag}
							</TitleComponet>
						</ContentTagItem>
					))}
				</ContentTags>
				<ContentChildFooterCard>
					<ContentLikes>
						<FcLike />
						{dataCardItem?.likes}
					</ContentLikes>
					<ContentLikes onClick={onShowCommentsAction}>
						<FaComments />
					</ContentLikes>
				</ContentChildFooterCard>
			</ContentChildCard>
		</ContentMain>
	);
}
