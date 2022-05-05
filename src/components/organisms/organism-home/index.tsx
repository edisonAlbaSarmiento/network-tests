import { CardsInfo } from 'components/molecules';
import { Key } from 'react';
import { ContentMain } from './styled';

type HomeOrganismProps = {
	dataCard: any;
	selectItem?: any;
};

function HomeOrganism({
	dataCard,
	selectItem = () => {},
}: HomeOrganismProps): JSX.Element {
	return (
		<ContentMain>
			{dataCard?.map((item: any, index: Key | null | undefined) => (
				<div onClick={selectItem(item)}>
					<CardsInfo key={index} dataCardItem={item} />
				</div>
			))}
		</ContentMain>
	);
}

export default HomeOrganism;
