import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import QuizSummary, { emojis } from "./QuizSummary";
import QuizProvider from "../../context/quiz-context";
import { QuizProps } from "../../constants/InitialQuizState";
import { BrowserRouter as Router } from "react-router-dom";
import { mockState } from "../fixtures/quizFixtures";

const testId = "quiz-summary-testId";

const component = (props: QuizProps = mockState) =>
  render(
    <Router>
      <QuizProvider contextValue={props}>
        <QuizSummary testId={testId} />
      </QuizProvider>
    </Router>
  );

describe("QuizSummary rendering", () => {
  test("Component should be visible", () => {
    component();
    const wrapper = screen.getByTestId(testId);
    expect(wrapper).toBeInTheDocument();
  });
  test("Should render text - You scored 30 out of 30 (100%)", () => {
    const points = 30;
    const totalQuestionPoints = 30;
    const percentage = Math.ceil((points / totalQuestionPoints) * 100);

    component({ ...mockState, points, totalQuestionPoints });
    const element = screen.getByRole("status");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(
      `${emojis.excellent}You scored ${points} out of ${totalQuestionPoints} (${percentage}%)`
    );
  });

  test("Should render text - Highscore: 101 points", () => {
    component();
    const text = screen.getByRole("highscore").textContent;
    expect(text).toEqual(`Highscore: ${mockState.highscore} points`);
  });
  test("Should render text - Restart Quiz", () => {
    component();
    const text = screen.queryByText("Restart Quiz");
    expect(text).toBeInTheDocument();
  });

  test("Should render - excellent emoji", () => {
    const points = 100;
    const totalQuestionPoints = 100;
    component({ ...mockState, points, totalQuestionPoints });
    const img = screen.getByRole("img");
    expect(img.textContent).toEqual(emojis.excellent);
  });

  test("Should render - veryGood emoji", () => {
    const points = 80;
    const totalQuestionPoints = 100;
    component({ ...mockState, points, totalQuestionPoints });
    const img = screen.getByRole("img");
    expect(img.textContent).toEqual(emojis.veryGood);
  });

  test("Should render - notGood emoji", () => {
    const points = 50;
    const totalQuestionPoints = 100;
    component({ ...mockState, points, totalQuestionPoints });
    const img = screen.getByRole("img");
    expect(img.textContent).toEqual(emojis.notGood);
  });

  test("Should render - bad emoji", () => {
    const points = 30;
    const totalQuestionPoints = 100;
    component({ ...mockState, points, totalQuestionPoints });
    const img = screen.getByRole("img");
    expect(img.textContent).toEqual(emojis.bad);
  });

  test("Should render - veryBad emoji", () => {
    const points = 0;
    const totalQuestionPoints = 100;
    component({ ...mockState, points, totalQuestionPoints });
    const img = screen.getByRole("img");
    expect(img.textContent).toEqual(emojis.veryBad);
  });
});
