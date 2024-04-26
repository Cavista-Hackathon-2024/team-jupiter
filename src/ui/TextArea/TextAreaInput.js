import TextAreaContainer from "./styles";

const TextAreaInput = ({ name, value, label, onChange, ...rest }) => {
  return (
    <TextAreaContainer>
      <label for={name}>{label}</label>
      <textarea
        name={name}
        value={value}
        id={name}
        onChange={(event) => onChange(event)}
        {...rest}
      ></textarea>
    </TextAreaContainer>
  );
};

export default TextAreaInput;
