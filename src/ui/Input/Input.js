import React from "react";
import InputContainer from "./styles";

const Input = ({ id, value, label, onChange, ...rest }) => {
  return (
    <InputContainer>
      <label for={id}>{label}</label>
      <input name={id} value={value} onChange={onChange} {...rest} />
    </InputContainer>
  );
};

export default Input;
