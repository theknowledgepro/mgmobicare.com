'use client';
import Button from '@mui/material/Button';
import styles from './components.module.css';

// backgroundColor, textColor, className isSecondInRow
const CustomButton = (props) => {
	const { backgroundColor, textColor, isSecondInRow, ...buttonProps } = props;
	return (
		<Button
			{...buttonProps}
			style={{ '--background-color': props?.backgroundColor, '--text-color': props?.textColor }}
			className={`${styles.button} ${props?.className} ${props?.isSecondInRow && styles.second_btn}`}>
			{props?.children}
		</Button>
	);
};

export default CustomButton;
