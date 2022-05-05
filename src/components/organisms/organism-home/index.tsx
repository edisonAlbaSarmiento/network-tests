import { CardsInfo } from 'components/molecules';
import { ContentMain } from './styled';

type HomeOrganismProps = {
	dataCard: any;
};

function HomeOrganism({ dataCard }: HomeOrganismProps): JSX.Element {
	return (
		<ContentMain>
			<CardsInfo dataCard={dataCard} />
		</ContentMain>
	);
}

export default HomeOrganism;
