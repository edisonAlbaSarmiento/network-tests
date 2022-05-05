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
} from './styled';
import { Key } from 'react';
import format from 'date-fns/format';

type CardsInfoProps = {
	dataCardItem?: any;
	onClickAction?: () => void;
	key?: Key | null | undefined;
};
export default function CardsInfo({
	dataCardItem,
	onClickAction,
	key,
}: CardsInfoProps): JSX.Element {
	return (
		<ContentMain onClick={onClickAction} key={key}>
			<ContentChildCard>
				<ContentHeaderCard>
					<ContentImageCard src={`${dataCardItem?.owner?.picture}`} />
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

				<ContentChildFooterCard>
					<ContentLikes>
						<FcLike />
						{dataCardItem?.likes}
					</ContentLikes>
					<ContentLikes>
						<FaComments />
						{dataCardItem?.likes}
					</ContentLikes>
				</ContentChildFooterCard>
			</ContentChildCard>
		</ContentMain>
	);
}
