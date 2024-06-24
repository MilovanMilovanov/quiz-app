import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Question from "./Question";
import QuizProvider from "../../context/quiz-context";
import { mockState } from "../fixtures/quizFixtures";

const testId = "question-testId";
const question = "What's the fundamental building block of React apps?";

const component = () =>
  render(
    <QuizProvider contextValue={mockState}>
      <Question testId={testId} />
    </QuizProvider>
  );

describe("Question rendering", () => {
  test("Should render <h4> title - What's the fundamental building block of React apps?", () => {
    component();
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
    expect(element).to.have.toHaveRole("heading");
    expect(element.textContent).toEqual(question);
    expect(screen.getByText(question)).toBeInTheDocument();
  });
});
