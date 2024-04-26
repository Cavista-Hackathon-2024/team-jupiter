import React from "react";
import InputContainer from "./styles";

const Input = ({ name, value, label, onChange, ...rest }) => {
  return (
    <InputContainer>
      <label for={name}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={(event) => onChange(event)}
        {...rest}
      />
    </InputContainer>
  );
};

export default Input;
