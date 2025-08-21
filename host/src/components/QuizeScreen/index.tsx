import React from "react";
import { useNavigate } from "react-router-dom";

import hostAppText from "../../constant/text";
import { useUser } from "../../UserContext";
import Button from "../Button/index";
import Loader from "../Loader/index";

import "./styles.css";

const Quize = React.lazy(() =>
  import("quize/Quize").then((mod) => {
    console.log("Loaded module:", mod);
    return mod;
  }),
);

function QuizeScreen() {
  const { userName } = useUser();
  const navigate = useNavigate();
  const handleClickReturn = () => {
    window.dispatchEvent(new CustomEvent("reset-quize"));
    navigate("/");
  };
  return (
    <div className="quizeContainer" data-cy="quize-screen-container">
      <h3 className="quizeH3">
        {hostAppText.quizeScreen.welcomeText(userName)}
      </h3>
      {userName && (
        <React.Suspense fallback={<Loader />}>
          <Quize />
        </React.Suspense>
      )}
      <Button
        handleClick={handleClickReturn}
        text={hostAppText.buttonText.exit}
        dataCy="return-start-screen-button"
      />
    </div>
  );
}

export default QuizeScreen;
