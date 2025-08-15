import React from "react";

import ButtonProps from "../../types/ButtonProps";

import "./styles.css";

function Button({ handleClick, text }: ButtonProps) {
  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
