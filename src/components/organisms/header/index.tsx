import React from 'react';

import { ContentHeader } from 'components/molecules';
import { ContentMain } from './styled';

type HeaderOrganismProps = {
	dataUserLogin: any;
	actionLogout: () => void;
};

function HeaderOrganism({
	dataUserLogin,
	actionLogout,
}: HeaderOrganismProps): JSX.Element {
	console.log('dataUserLogin', dataUserLogin);
	return (
		<ContentMain>
			<ContentHeader actionLogout={actionLogout} />
		</ContentMain>
	);
}

export default HeaderOrganism;
