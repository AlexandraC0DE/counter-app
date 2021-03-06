import React from 'react';
import '../styles/Button.css';

const Button = ({ text, clickButton, handleClick }) => {
    return (
        		<button
						className={ clickButton ? 'click-button' : 'restart-button' }
						onClick={handleClick}
				>
						{ text }
				</button>
    );
};

export default Button;