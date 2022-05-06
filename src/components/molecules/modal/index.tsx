import {
	ContentMainModal,
	Content,
	ContentCloset,
	ContentChilld,
	ContentInfoModal,
} from './styled';
import { MdClose } from 'react-icons/md';

type DialogProps = {
	isOpen?: boolean;
	setIsOpen?: (value: boolean) => void | undefined;
	children: React.ReactNode;
};
function ModalMolecule({
	isOpen = false,
	setIsOpen = () => {},
	children,
}: DialogProps): JSX.Element {
	return (
		<ContentMainModal isOpen={isOpen}>
			<Content>
				<ContentInfoModal>
					<ContentCloset onClick={() => setIsOpen(false)}>
						<MdClose />
					</ContentCloset>
				</ContentInfoModal>
				<ContentChilld>{children}</ContentChilld>
			</Content>
		</ContentMainModal>
	);
}

export default ModalMolecule;
