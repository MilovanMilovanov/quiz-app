import { QuestionData, initialQuizState } from "../constants/InitialQuizState";

export type ActionType =
  | "dataReceived"
  | "dataFailed"
  | "startQuiz"
  | "newAnswer"
  | "nextQuestion"
  | "finishQuiz"
  | "restartQuiz"
  | "tick";

export enum QuizStatus {
  Ready = "ready",
  Active = "active",
  Finished = "finished",
  Error = "error",
}

export type QuizAction = {
  type: ActionType;
  payload?: QuestionData[] | { index?: number; correctOption?: boolean };
};

export const SECS_PER_QUESTION = 12;

const calculateTotalPoints = (questions) =>
  questions.reduce((total, question) => total + question.points, 0);

export default function quizReducer(state, action: QuizAction) {
  const { type, payload } = action;

  switch (type) {
    case "dataReceived": {
      return { ...state, questions: payload, status: QuizStatus.Ready };
    }

    case "dataFailed": {
      return { ...state, status: QuizStatus.Error };
    }

    case "startQuiz": {
      const { questions } = state;
      return {
        ...state,
        status: QuizStatus.Active,
        secondsRemaining: questions.length * SECS_PER_QUESTION,
        totalQuestionPoints: calculateTotalPoints(questions),
      };
    }

    case "newAnswer": {
      const { index, questions } = state;
      const { points, correctOption } = questions.at(index)!;
      const result = payload && "index" in payload && payload.index;

      return {
        ...state,
        answer: result,
        points: result === correctOption ? state.points + points : state.points,
        correctOption: result === correctOption,
      };
    }

    case "nextQuestion": {
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        correctOption: false,
      };
    }

    case "finishQuiz": {
      const { points, highscore, questions } = state;
      return {
        ...state,
        status: QuizStatus.Finished,
        highscore: points > highscore ? points : highscore,
        totalQuestionPoints: calculateTotalPoints(questions),
      };
    }

    case "restartQuiz": {
      const { highscore, prevHighscore, questions } = state;
      return {
        ...initialQuizState,
        prevHighscore: prevHighscore < highscore ? highscore : prevHighscore,
        questions,
        status: QuizStatus.Ready,
      };
    }

    case "tick": {
      const { secondsRemaining, status } = state;
      return {
        ...state,
        secondsRemaining: secondsRemaining! - 1,
        status: secondsRemaining === 0 ? QuizStatus.Finished : status,
      };
    }
    default:
      return state;
  }
}
