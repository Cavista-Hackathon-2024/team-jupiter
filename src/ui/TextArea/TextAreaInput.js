import TextAreaContainer from './styles';

const TextAreaInput = ({ name, value, label, onChange, ...rest }) => {
	return (
		<TextAreaContainer>
			<div className='inputBox'>
				<label for={name}>{label}</label>
				<div>
					<textarea
						name={name}
						value={value}
						id={name}
						onChange={(event) => onChange(event)}
						class='text-gray-900 text-sm block w-full p-2.5'
						{...rest}></textarea>
				</div>
			</div>
		</TextAreaContainer>
	);
};

export default TextAreaInput;
