import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import hostAppText from "../../constant/text";
import { useUser } from "../../UserContext";
import Button from "../Button/index";
import Input from "../Input";
import Notification from "../Notification/index";

import "./styles.css";

function StartScreen() {
  const { userName } = useUser();
  const [isInput, setIsInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isInput) {
      timer = setTimeout(() => {
        setIsInput(false);
      }, 3000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isInput]);

  const handleStartQuize = () => {
    if (userName.trim() !== "") {
      setIsInput(false);
      navigate("/quize");
    } else {
      setIsInput(true);
    }
  };
  return (
    <div className="startContainer">
      <div className="startTextContainer">
        <h1>{hostAppText.startScreen.h1Text}</h1>
        <p>{hostAppText.startScreen.pText}</p>
      </div>
      <div className="inputAndButton">
        <Input />
        <Button
          handleClick={handleStartQuize}
          text={hostAppText.buttonText.start}
        />
        {isInput && <Notification />}
      </div>
    </div>
  );
}

export default StartScreen;
