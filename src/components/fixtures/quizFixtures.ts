import { QuizProps } from "../../constants/InitialQuizState";
import { QuizStatus } from "../../reducers/quizReducer";

export const mockState: QuizProps = {
  questions: [
    {
      question: "What's the fundamental building block of React apps?",
      options: ["Components", "Blocks", "Elements", "Effects"],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which is the most popular JavaScript framework?",
      options: ["Angular", "React", "Svelte", "Vue"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "Which company invented React?",
      options: ["Google", "Apple", "Netflix", "Facebook"],
      correctOption: 3,
      points: 10,
    },
  ],
  status: QuizStatus.Active,
  index: 0,
  answer: null,
  correctOption: null,
  points: 101,
  highscore: 101,
  prevHighscore: 120,
  animateScore: false,
  secondsRemaining: null,
  totalQuestionPoints: 30,
};
