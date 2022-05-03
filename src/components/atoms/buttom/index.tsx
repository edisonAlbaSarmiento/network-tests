import PropTypes from 'prop-types';

import { ButtonCustom } from './styled';

type ButtonComponentProps = {
	title: string;
	disabled: boolean;
	onClick: () => void;
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

ButtonComponent.defaultProps = {
	disabled: false,
};

ButtonComponent.propTypes = {
	title: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default ButtonComponent;
