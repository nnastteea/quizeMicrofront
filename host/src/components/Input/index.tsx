import React from "react";

import hostAppText from "../../constant/text";
import { useUser } from "../../UserContext";

import "./styles.css";

function Input() {
  const { userName, setUserName } = useUser();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  return (
    <div className="inputContainer">
      <label
        htmlFor="input-name"
        className={userName ? "placeholder inFocus" : "placeholder"}
      >
        {hostAppText.inputLabelText.label}
      </label>
      <input
        id="input-name"
        type="text"
        value={userName}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
}

export default Input;
