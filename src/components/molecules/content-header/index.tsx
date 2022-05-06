import React from 'react';
import { ButtonComponent, TitleComponet } from 'components/atoms';

import {
	ContentMain,
	ImagenProfile,
	ContentChild,
	ContentTextEmail,
	ContentTextName,
} from './styled';

type ContentHeaderProps = {
	image: string;
	name: string;
	email: string;
	actionLogout: () => void;
};
function ContentHeader({
	image,
	name,
	email,
	actionLogout,
}: ContentHeaderProps): JSX.Element {
	return (
		<ContentMain>
			<ImagenProfile
				src={
					`${image}` ||
					'https://avatars3.githubusercontent.com/u/31748119?s=460&amp;u=5b533fd135904b8b25951011a0c3da20fe15b413&amp;v=4'
				}
			/>
			<ContentChild>
				<ContentTextName>
					<TitleComponet
						variant='textCards'
						fontSize='15px'
						marginText='0 20px'>
						{`User: ${name}`}
					</TitleComponet>
				</ContentTextName>
				<ContentTextEmail>
					<TitleComponet
						variant='textCards'
						fontSize='15px'
						marginText='0 20px'>
						{`Email: ${email}`}
					</TitleComponet>
				</ContentTextEmail>
			</ContentChild>
			<ButtonComponent title='Logout' onClick={actionLogout} />
		</ContentMain>
	);
}

export default ContentHeader;
