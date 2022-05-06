import React from 'react';

import { ContentHeader } from 'components/molecules';
import { ContentMain } from './styled';

type HeaderOrganismProps = {
	dataUserLogin: any | undefined;
	actionLogout: () => void;
};

function HeaderOrganism({
	dataUserLogin = {
		email: '',
		name: '',
		urlImage: '',
	},
	actionLogout,
}: HeaderOrganismProps): JSX.Element {
	return (
		<ContentMain>
			<ContentHeader
				image={dataUserLogin?.urlImage}
				name={dataUserLogin?.name}
				email={dataUserLogin?.email}
				actionLogout={actionLogout}
			/>
		</ContentMain>
	);
}

export default HeaderOrganism;
