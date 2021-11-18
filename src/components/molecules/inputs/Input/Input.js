import styles from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ register, type, label, id, error }) => {
	return (
		<div className={styles.wrapper}>
			<input
				type={type}
				placeholder={label}
				className={styles.input}
				{...register}
				id={id}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			{error && <span>ERROR</span>}
		</div>
	);
};

Input.propTypes = {
	register: PropTypes.object,
	type: PropTypes.string,
	label: PropTypes.string,
	id: PropTypes.string,
	error: PropTypes.object
};
Input.defaultProps = {
	register: undefined,
	type: 'text',
	label: 'Input',
	id: 'idValue',
	error: undefined
};

export default Input;
