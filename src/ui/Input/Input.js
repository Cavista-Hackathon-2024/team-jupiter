import React from 'react';
import InputContainer from './styles';

const Input = ({ name, value, label, onChange, ...rest }) => {
	return (
		<InputContainer>
			<div className='inputBox has-[:focus]:bg-white'>
				<label for={name}>{label}</label>
				<div>
					<input
						name={name}
						value={value}
						class='text-gray-900 text-sm block w-full p-2.5'
						onChange={(event) => onChange(event)}
						{...rest}
					/>
				</div>
			</div>
		</InputContainer>
	);
};

export default Input;
