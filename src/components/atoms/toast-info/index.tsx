import { useEffect } from 'react';
import { MdError } from 'react-icons/md';
import { ContentToast, ContentIcon } from './styled';
import { TitleComponet } from 'components/atoms';

type ToastInfoProps = {
	actionCloseToast?: () => void;
	showMessage?: any;
	message?: string;
};
export default function ToastInfo({
	message = 'Algo salio mal, intenta de nuevo',
	showMessage,
	actionCloseToast = () => {
		/* TODO document why this arrow function is empty */
	},
}: ToastInfoProps): JSX.Element {
	useEffect(() => {
		setTimeout(() => {
			actionCloseToast();
		}, 8000);
	});

	return (
		<>
			{showMessage && (
				<ContentToast>
					<TitleComponet variant='textCards' fontSize='20px' color='white'>
						{message}
					</TitleComponet>
					<ContentIcon>
						<MdError size={20} color='white' />
					</ContentIcon>
				</ContentToast>
			)}
		</>
	);
}
