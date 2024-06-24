export const initialQuizState: QuizProps = {
  questions: [],
  status: "",
  index: 0,
  answer: null,
  correctOption: null,
  points: 0,
  highscore: 0,
  prevHighscore: 0,
  animateScore: false,
  secondsRemaining: null,
  totalQuestionPoints: 0,
};

export interface QuestionData {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  id?: string;
}

export interface QuizProps {
  questions: QuestionData[];
  status: string;
  index: number;
  answer: null | number;
  correctOption: null | number;
  points: number;
  highscore: number;
  prevHighscore: number;
  animateScore: boolean;
  secondsRemaining: null | number;
  totalQuestionPoints: number;
}
