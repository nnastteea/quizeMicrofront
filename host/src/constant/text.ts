const hostAppText = {
  startScreen: {
    h1Text: "Who is the smartest of you?",
    pText:
      "Challenge your friends, take the knowlendge test and find out who is the real erudite",
  },
  buttonText: {
    start: "Start",
    exit: "Go to start screen",
  },
  inputLabelText: {
    nameLabel: "Input your name",
    roomLabel: "Input room id or create a new room",
  },
  quizeScreen: {
    welcomeText: (userName: string) =>
      `Go ahead, ${userName}! Show what you know!`,
    allPlayers: "All Players",
    finalResults: "Final results of all players",
    correctAnswers: "correct answers",
    win: "🥳 You win! 🥳",
    lose: "You lose 😥",
    deadHeat: "🤝 It's a dead heat! 🤝",
  },
  notification: {
    inputMessage: "You should input your name!",
    roomIdMessage: "You should input room Id!",
  },
  finalResults: {
    waitingText: "Wait until all players finish the test",
  },
};

export default hostAppText;
