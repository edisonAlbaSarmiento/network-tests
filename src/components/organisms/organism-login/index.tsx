import { LoginMolecule } from 'components/molecules';
import { ContentMain } from './styled';

type LoginOrganismProps = {
	title: string | undefined;
	subTitle?: string;
};

function LoginOrganism({ title, subTitle }: LoginOrganismProps): JSX.Element {
	return (
		<ContentMain>
			<LoginMolecule title={title} subTitle={subTitle} />
		</ContentMain>
	);
}

export default LoginOrganism;
