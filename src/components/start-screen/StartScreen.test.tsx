import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import StartScreen from "./StartScreen";
import { mockState } from "../fixtures/quizFixtures";
import QuizProvider from "../../context/quiz-context";
import { BrowserRouter as Router } from "react-router-dom";

const testId = "start-screen-testId";

const component = () =>
  render(
    <Router>
      <QuizProvider contextValue={mockState}>
        <StartScreen testId={testId} />
      </QuizProvider>
    </Router>
  );

describe("StartScreen rendering", () => {
  beforeEach(() => {
    component();
  });

  test("Should render h3, h4 headers with correct text", () => {
    const h3 = screen.getByRole("heading", { level: 3 });
    const h4 = screen.getByRole("heading", { level: 4 });
    const texth3 = screen.getByText("Welcome to The React Quiz");
    const texth4 = screen.getByText(
      `${mockState.questions.length} questions to test your React mastery`
    );

    expect(h3).toBeInTheDocument();
    expect(texth3).toBeInTheDocument();
    expect(h4).toBeInTheDocument();
    expect(texth4).toBeInTheDocument();
  });

  test("Should render text - Let's start", () => {
    const btnText = screen.getByText("Let's start");
    expect(btnText).toBeInTheDocument();
  });
});
