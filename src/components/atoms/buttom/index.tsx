import { ButtonCustom } from './styled';

type ButtonComponentProps = {
	title?: string;
	disabled?: boolean;
	onClick?: () => void;
};

const ButtonComponent = ({
	title,
	disabled = false,
	onClick,
}: ButtonComponentProps) => (
	<ButtonCustom
		color='primary'
		disabled={disabled}
		onClick={onClick}
		// size='medium'
	>
		{title}
	</ButtonCustom>
);

export default ButtonComponent;
