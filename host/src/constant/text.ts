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
    label: "Input your name",
  },
  quizeScreen: {
    welcomeText: (userName: string) =>
      `Go ahead, ${userName}! Show what you know!`,
  },
  notification: {
    notificationMessage: "You should input your name!",
  },
};

export default hostAppText;
