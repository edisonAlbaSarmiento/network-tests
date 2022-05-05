import { CardsInfo } from 'components/molecules';
import { Key } from 'react';
import { ContentMain } from './styled';

type HomeOrganismProps = {
	dataCard: any;
	selectItem?: any;
	setIdUser?: any;
};

function HomeOrganism({
	dataCard,
	selectItem,
	setIdUser,
}: HomeOrganismProps): JSX.Element {
	return (
		<ContentMain>
			{dataCard?.map((item: any, index: Key | null | undefined) => (
				<CardsInfo
					dataCardItem={item}
					onClickAction={() => {
						selectItem(item);
						setIdUser(item.owner.id);
					}}
					key={index}
				/>
			))}
		</ContentMain>
	);
}

export default HomeOrganism;
