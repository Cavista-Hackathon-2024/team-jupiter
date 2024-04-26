import TextArea from "./styles";

const TextAreaInput = ({ id, value, label, onChange, ...rest }) => {
  return (
    <>
      <label for={id}>{label}</label>
      <TextArea
        name={id}
        value={value}
        id={id}
        onChange={onChange}
        {...rest}
      ></TextArea>
    </>
  );
};

export default TextAreaInput;
