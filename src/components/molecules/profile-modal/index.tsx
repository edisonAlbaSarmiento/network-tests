import { TitleComponet } from 'components/atoms';
import React from 'react';
import { ContentProfile, ContentImage, ContentData } from './styled';
import format from 'date-fns/format';

type ProfileModalProps = {
	dateOfBirth: string;
	email: string;
	firstName: string;
	gender: string;
	lastName: string;
	location?: any;
	phone: string;
	picture: string;
	registerDate: string;
	updatedDate: string;
};
function ProfileModal({
	email,
	firstName,
	lastName,
	gender,
	location,
	phone,
	picture,
	dateOfBirth,
	registerDate,
	updatedDate,
}: ProfileModalProps): JSX.Element {
	return (
		<ContentProfile>
			<ContentImage src={`${picture}`} />
			<div>
				<TitleComponet variant='subtitle' fontSize='12' marginText='2% 0'>
					{`${firstName} ${lastName}`}
				</TitleComponet>
				<TitleComponet variant='subtitle' fontSize='12' marginText='2% 0'>
					{gender}
				</TitleComponet>
			</div>
			<div>
				<TitleComponet
					variant='subtitle'
					fontSize='12'
					marginText='2% 0'
					color='#9999'>
					{`Phone: ${phone}`}
				</TitleComponet>
				<TitleComponet variant='subtitle' fontSize='12' marginText='2% 0'>
					{email}
				</TitleComponet>
			</div>
			<ContentData>
				<TitleComponet variant='subtitle' fontSize='12' marginText='2% 0'>
					{`Birth: ${format(new Date(dateOfBirth), 'dd/MMMM/yyyy')}`}
				</TitleComponet>
			</ContentData>
			<ContentData>
				<TitleComponet
					variant='subtitle'
					fontSize='0.90rem'
					color='#9999'
					marginText='2% 0'>
					{`Register: ${format(new Date(registerDate), 'dd/MMMM/yyyy')}`}
				</TitleComponet>
				<TitleComponet
					variant='subtitle'
					fontSize='0.90rem'
					color='#9999'
					marginText='2% 0'>
					{`Updated: ${format(new Date(updatedDate), 'dd/MMMM/yyyy')}`}
				</TitleComponet>
			</ContentData>
			<ContentData>
				<TitleComponet
					variant='subtitle'
					fontSize='0.90rem'
					color='#9999'
					marginText='2% 0'>
					{`Country: ${location?.country}`}
				</TitleComponet>
				<TitleComponet
					variant='subtitle'
					fontSize='0.90rem'
					color='#9999'
					marginText='2% 0'>
					{`Location: ${location?.city}`}
				</TitleComponet>
			</ContentData>
		</ContentProfile>
	);
}

export default ProfileModal;
