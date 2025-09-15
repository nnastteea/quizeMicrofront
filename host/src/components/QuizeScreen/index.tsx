import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { io, Socket } from "socket.io-client";

import hostAppText from "../../constant/text";
import Results from "../../types/Results";
import Users from "../../types/Users";
import { useUser } from "../../UserContext";
import Button from "../Button/index";
import FinalResults from "../FinalResults/index";
import Loader from "../Loader/index";
import PlayersList from "../PlayersList/index";

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
  const location = useLocation();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [allPeople, setAllPeople] = useState<Users>([]);
  const [allResults, setAllResults] = useState<Results>([]);
  const [isQuizeDone, setIsQuizeDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [completedUserCount, setCompletedUserCount] = useState(0);
  const { roomId } = location.state as { roomId: string };
  const [userStatus, setUserStatus] = useState<
    "win" | "lose" | "deadHeat" | null
  >(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    newSocket.emit("joinRoom", { roomId, userName });

    newSocket.on("roomData", (data) => {
      setAllPeople(data.users);
      setAllResults(data.results);
      setCompletedUserCount(data.completedUserCount);

      if (
        data.completedUserCount > 0 &&
        data.completedUserCount === data.users.length
      ) {
        const sortedResults = [...data.results].sort(
          (a, b) => b.correctAnswers - a.correctAnswers,
        );
        const highScore = sortedResults[0].correctAnswers;
        const winners = sortedResults.filter(
          (res) => res.correctAnswers === highScore,
        );
        const isCurrentUserWinner = winners.some(
          (w) => w.userName === userName,
        );
        if (isCurrentUserWinner) {
          if (winners.length > 1) {
            setUserStatus("deadHeat");
          } else {
            setUserStatus("win");
          }
        } else {
          setUserStatus("lose");
        }
      }
    });

    newSocket.on("joinError", (data) => {
      setErrorMessage(data.message);
      newSocket.disconnect();
      setSocket(null);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [roomId, userName]);

  const handleQuizeDone = (correctAnswers: number) => {
    if (socket && !isQuizeDone) {
      socket.emit("results", { roomId, userName, correctAnswers });
      setIsQuizeDone(true);
    }
  };

  const handleAnswers = (correctAnswers: number) => {
    if (socket && !isQuizeDone) {
      socket.emit("liveScore", { roomId, userName, correctAnswers });
    }
  };

  const handleClickReturn = () => {
    if (socket) {
      socket.emit("leaveRoom", { roomId, userName });
    }
    window.dispatchEvent(new CustomEvent("reset-quize"));
    navigate("/");
  };

  useEffect(() => {
    const handler = () => {
      setIsQuizeDone(false);
    };
    window.addEventListener("restart-quize", handler);
    return () => {
      window.removeEventListener("restart-quize", handler);
    };
  }, []);

  return (
    <div className="quizeContainer" data-cy="quize-screen-container">
      {errorMessage ? (
        <div className="error-message">{errorMessage}</div>
      ) : (
        <>
          {!isQuizeDone && (
            <h3 className="quizeH3">
              {hostAppText.quizeScreen.welcomeText(userName)}
            </h3>
          )}
          {allPeople.length > 0 && !isQuizeDone && (
            <PlayersList
              allPeople={allPeople}
              allResults={allResults}
              currentUser={userName}
            />
          )}
          {isQuizeDone &&
            (userStatus === "win" ? (
              <p className="textStatus">{hostAppText.quizeScreen.win}</p>
            ) : userStatus === "deadHeat" ? (
              <p className="textStatus">{hostAppText.quizeScreen.deadHeat}</p>
            ) : userStatus === "lose" ? (
              <p className="textStatus">{hostAppText.quizeScreen.lose}</p>
            ) : null)}
          {userName && (
            <React.Suspense fallback={<Loader />}>
              <Quize onQuizeDone={handleQuizeDone} onAnswer={handleAnswers} />
            </React.Suspense>
          )}
          <FinalResults
            isQuizeDone={isQuizeDone}
            allResults={allResults}
            completedUserCount={completedUserCount}
            allPeople={allPeople}
          />
        </>
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
