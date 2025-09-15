import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import hostAppText from "../../constant/text";
import { useUser } from "../../UserContext";
import Button from "../Button/index";
import Input from "../Input";
import Notification from "../Notification/index";

import "./styles.css";

function StartScreen() {
  const { userName, setUserName } = useUser();
  const [roomId, setRoomId] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (message) {
      timer = setTimeout(() => {
        setMessage("");
      }, 3000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [message]);

  const handleStartQuize = () => {
    if (userName.trim() === "") {
      setMessage(hostAppText.notification.inputMessage);
    } else if (roomId.trim() === "") {
      setMessage(hostAppText.notification.roomIdMessage);
    } else {
      setMessage("");
      navigate("/quize", { state: { roomId, userName } });
    }
  };

  return (
    <div className="startContainer" data-cy="start-screen-container">
      <div className="startTextContainer">
        <h1>{hostAppText.startScreen.h1Text}</h1>
        <p>{hostAppText.startScreen.pText}</p>
      </div>
      <div className="inputAndButton">
        <Input
          labelHtmlFor="input-name"
          inputText={userName}
          inputId="input-name"
          setInputText={setUserName}
          dataCy="user-name-input"
          placeholder={hostAppText.inputLabelText.nameLabel}
        />
        <Input
          labelHtmlFor="input-room"
          inputText={roomId}
          inputId="input-room"
          setInputText={setRoomId}
          dataCy="room-id-input"
          placeholder={hostAppText.inputLabelText.roomLabel}
        />
        <Button
          handleClick={handleStartQuize}
          text={hostAppText.buttonText.start}
          dataCy="start-quize-button"
        />
        {message && <Notification message={message} />}
      </div>
    </div>
  );
}

export default StartScreen;
