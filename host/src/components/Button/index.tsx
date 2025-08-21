import React from "react";

import ButtonProps from "../../types/ButtonProps";

import "./styles.css";

function Button({ handleClick, text, dataCy }: ButtonProps) {
  return (
    <button className="button" data-cy={dataCy} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
