import quizReducer, {
  QuizAction,
  QuizStatus,
  SECS_PER_QUESTION,
} from "./quizReducer";
import { describe, expect, test } from "vitest";
import { mockState } from "../components/fixtures/quizFixtures";
import { QuizProps } from "../constants/InitialQuizState";

describe("quizReducer", () => {
  test("should handle dataReceived action", () => {
    const action: QuizAction = {
      type: "dataReceived",
      payload: mockState.questions,
    };

    const newState = quizReducer(mockState, action);

    expect(newState.status).toBe(QuizStatus.Ready);
    expect(newState.questions).toEqual(mockState.questions);
  });

  test("should handle dataFailed action", () => {
    const action: QuizAction = { type: "dataFailed" };

    const newState = quizReducer(mockState, action);

    expect(newState.status).toBe(QuizStatus.Error);
  });

  test("should handle startQuiz action", () => {
    const action: QuizAction = {
      type: "startQuiz",
      payload: mockState.questions,
    };

    const newState = quizReducer(mockState, action);

    expect(newState.status).toBe(QuizStatus.Active);
    expect(newState.secondsRemaining).toBe(
      mockState.questions.length * SECS_PER_QUESTION
    );
    expect(newState.totalQuestionPoints).toBe(30);
  });

  test("should handle nextQuestion action", () => {
    const currentState = { ...mockState, index: 0 };
    const action: QuizAction = { type: "nextQuestion" };

    const newState = quizReducer(currentState, action);

    expect(newState.index).toBe(1);
    expect(newState.answer).toBeNull();
    expect(newState.correctOption).toBeFalsy();
  });

  test("should handle finishQuiz action", () => {
    const currentState = {
      ...mockState,
      points: 15,
      highscore: 10,
      questions: [{ id: 1, question: "Q1", points: 5 }],
    };
    const action: QuizAction = { type: "finishQuiz" };

    const newState = quizReducer(currentState, action);

    expect(newState.status).toBe(QuizStatus.Finished);
    expect(newState.highscore).toBe(15);
    expect(newState.totalQuestionPoints).toBe(5);
  });

  test("should handle restartQuiz action", () => {
    const currentState: QuizProps = {
      ...mockState,
      highscore: 1,
      prevHighscore: 3,
      questions: mockState.questions,
    };
    const action: QuizAction = { type: "restartQuiz" };
    const newState = quizReducer(currentState, action);

    expect(newState.prevHighscore).toBe(currentState.prevHighscore);
    expect(newState.status).toBe(QuizStatus.Ready);
  });

  test("should handle tick action", () => {
    const currentState = {
      ...mockState,
      secondsRemaining: 2,
      status: QuizStatus.Active,
    };
    const action: QuizAction = { type: "tick" };

    const newState = quizReducer(currentState, action);
    expect(newState.secondsRemaining).toBe(1);
    expect(newState.status).toBe(QuizStatus.Active);
  });

  test("should handle tick action when secondsRemaining is 0", () => {
    const currentState = {
      ...mockState,
      secondsRemaining: 0,
      status: QuizStatus.Active,
    };
    const action: QuizAction = { type: "tick" };

    const newState = quizReducer(currentState, action);

    expect(newState.status).toBe(QuizStatus.Finished);
  });

  test("should handle newAnswer action with correct answer", () => {
    const currentState = { ...mockState, index: 0 };
    const action: QuizAction = {
      type: "newAnswer",
      payload: { index: 0, correctOption: true },
    };

    const newState = quizReducer(currentState, action);

    expect(newState.answer).toBe(0);
    expect(newState.correctOption).toBeTruthy();
  });

  test("should handle newAnswer action with incorrect answer", () => {
    const currentState = { ...mockState, index: 0 };
    const action: QuizAction = {
      type: "newAnswer",
      payload: { index: 1, correctOption: false },
    };

    const newState = quizReducer(currentState, action);

    expect(newState.answer).toBe(1);
    expect(newState.correctOption).toBeFalsy();
  });
});
