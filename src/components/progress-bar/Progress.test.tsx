import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Progress from "./Progress";
import QuizProvider from "../../context/quiz-context";
import { QuizProps } from "../../constants/InitialQuizState";
import { mockState } from "../fixtures/quizFixtures";

const testId = "progress-bar-testId";

const component = (props: QuizProps = mockState) =>
  render(
    <QuizProvider contextValue={props}>
      <Progress testId={testId} />
    </QuizProvider>
  );

describe("Progress rendering", () => {
  test("Should render the Progress section", () => {
    component();
    const progressSection = screen.getByTestId(testId);
    expect(progressSection).toBeInTheDocument();
  });

  test("Should render <progress /> semantic tag", () => {
    component();
    const progressTag = screen.getByRole("progressbar");
    expect(progressTag).toBeInTheDocument();
  });

  test("Should render text - Question 1 / 3", async () => {
    component(mockState);
    const element = screen.getAllByRole("status").at(0)!;
    const text = "Question 1 / 3";
    expect(element).toBeInTheDocument();
    expect(element.textContent).toEqual(text);
  });

  test("Should render totalQuestionPoints - 0/30", () => {
    component({
      ...mockState,
      points: 0,
      totalQuestionPoints: 30,
      prevHighscore: 0,
    });
    const text = "0/30";
    const element = screen.getAllByRole("status").at(1)!;
    expect(element).toBeInTheDocument();
    expect(element.textContent).toEqual(text);
  });

  test("Should render text - Score to beat 100", () => {
    component({ ...mockState, prevHighscore: 100 });
    const text = "Score to beat 100";
    const element = screen.getAllByRole("status").at(1)!;
    expect(element).toBeInTheDocument();
    expect(element.textContent).toEqual(text);
  });

  test("Score to beat 0 - should not be vissible", () => {
    component();
    const text = "Score to beat 0";
    const element = screen.getAllByRole("status").at(1)!;
    expect(element.textContent).not.toEqual(text);
  });

  test("Should render 3 elements with role attribute - status", () => {
    component({ ...mockState, prevHighscore: 1 });
    const elements = screen.getAllByRole("status");
    expect(elements.length).toEqual(3);
  });
});
