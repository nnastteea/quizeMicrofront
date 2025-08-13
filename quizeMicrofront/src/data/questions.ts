import sunImage from "../assets/1q-sun.png";
import oceanImage from "../assets/2q-ocean.png";
import monaLisaImage from "../assets/3q-monaLisa.png";
import nileImage from "../assets/4q-nile.png";
import ottawaImage from "../assets/5q-ottawa.png";
import chromosomesImage from "../assets/6q-chromosomes.png";
import titanicImage from "../assets/7q-titanic.png";
import milkyWayImage from "../assets/8q-milkyWay.png";
import earthImage from "../assets/9q-earth.png";
import animalImage from "../assets/10q-animal.png";

export const questions = [
  {
    id: 1,
    text: "How many planets are in the solar system?",
    image: sunImage,
    answers: [
      { id: "11", answer: "7", isCorrect: false },
      { id: "12", answer: "8", isCorrect: true },
      { id: "13", answer: "9", isCorrect: false },
      { id: "14", answer: "10", isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "What is the largest ocean on Earth?",
    image: oceanImage,
    answers: [
      { id: "21", answer: "Atlantic", isCorrect: false },
      { id: "22", answer: "Indian", isCorrect: false },
      { id: "23", answer: "Arctic", isCorrect: false },
      { id: "24", answer: "Pacific", isCorrect: true },
    ],
  },
  {
    id: 3,
    text: "Who is the author of the painting 'Mona Lisa'?",
    image: monaLisaImage,
    answers: [
      { id: "31", answer: "Vincent Van Gogh", isCorrect: false },
      { id: "32", answer: "Pablo Picasso", isCorrect: false },
      { id: "33", answer: "Leonardo da Vinci", isCorrect: true },
      { id: "34", answer: "Claude Monet", isCorrect: false },
    ],
  },
  {
    id: 4,
    text: "What is the longest river in the world?",
    image: nileImage,
    answers: [
      { id: "41", answer: "Nile", isCorrect: true },
      { id: "42", answer: "Amazon", isCorrect: false },
      { id: "43", answer: "Missisipi", isCorrect: false },
      { id: "44", answer: "Yangtze", isCorrect: false },
    ],
  },
  {
    id: 5,
    text: "What is the capital of Canada?",
    image: ottawaImage,
    answers: [
      { id: "51", answer: "Toronto", isCorrect: false },
      { id: "52", answer: "Vancouver", isCorrect: false },
      { id: "53", answer: "Monreal", isCorrect: false },
      { id: "54", answer: "Ottawa", isCorrect: true },
    ],
  },
  {
    id: 6,
    text: "How many chromosomes are in the human genome?",
    image: chromosomesImage,
    answers: [
      { id: "61", answer: "42", isCorrect: false },
      { id: "62", answer: "46", isCorrect: true },
      { id: "63", answer: "44", isCorrect: false },
      { id: "64", answer: "47", isCorrect: false },
    ],
  },
  {
    id: 7,
    text: "What year did the Titanic sink?",
    image: titanicImage,
    answers: [
      { id: "71", answer: "1912", isCorrect: true },
      { id: "72", answer: "1913", isCorrect: false },
      { id: "73", answer: "1910", isCorrect: false },
      { id: "74", answer: "1922", isCorrect: false },
    ],
  },
  {
    id: 8,
    text: "What is the name of the galaxy that includes our solar system?",
    image: milkyWayImage,
    answers: [
      { id: "81", answer: "Andromeda", isCorrect: false },
      { id: "82", answer: "Large Magellanic Cloud", isCorrect: false },
      { id: "83", answer: "Milky Way", isCorrect: true },
      { id: "84", answer: "Cassiopeia", isCorrect: false },
    ],
  },
  {
    id: 9,
    text: "What part of the earth's surface does the world ocean occupy?",
    image: earthImage,
    answers: [
      { id: "91", answer: "70", isCorrect: true },
      { id: "92", answer: "80", isCorrect: false },
      { id: "93", answer: "75", isCorrect: false },
      { id: "94", answer: "65", isCorrect: false },
    ],
  },
  {
    id: 10,
    text: "What animals are not mammals?",
    image: animalImage,
    answers: [
      { id: "101", answer: "Elephant", isCorrect: false },
      { id: "102", answer: "Cat", isCorrect: false },
      { id: "103", answer: "Lizard", isCorrect: true },
      { id: "104", answer: "Dolphin", isCorrect: false },
    ],
  },
];
