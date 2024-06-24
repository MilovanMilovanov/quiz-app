import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Timer from "./Timer";
import { mockState } from "../fixtures/quizFixtures";
import QuizProvider from "../../context/quiz-context";

const testId = "timer-testId";

const component = () =>
  render(
    <QuizProvider contextValue={{ ...mockState, secondsRemaining: 1 }}>
      <Timer testId={testId} />
    </QuizProvider>
  );

describe("Timer rendering", () => {
  test("Should render time - 00:01", () => {
    component();
    const time = screen.getByTestId(testId);
    expect(time).toBeInTheDocument();
    expect(time).toHaveTextContent("00:01");
  });
});
