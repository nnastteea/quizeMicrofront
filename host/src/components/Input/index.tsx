import React from "react";

import InputProps from "../../types/InputProps";

import "./styles.css";

function Input({
  labelHtmlFor,
  inputText,
  inputId,
  setInputText,
  placeholder,
  dataCy,
}: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  return (
    <div className="inputContainer">
      <label
        htmlFor={labelHtmlFor}
        className={inputText ? "placeholder inFocus" : "placeholder"}
      >
        {placeholder}
      </label>
      <input
        id={inputId}
        type="text"
        data-cy={dataCy}
        value={inputText}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
}

export default Input;
