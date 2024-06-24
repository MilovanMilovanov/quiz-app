import { render } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import { mockState } from "../components/fixtures/quizFixtures";
import QuizProvider from "../context/quiz-context";
import App from "../App";

const component = () =>
  render(
    <Router>
      <QuizProvider contextValue={mockState}>
        <App />
      </QuizProvider>
    </Router>
  );

describe("useReducer test", () => {
  const fetchSpy = vi.spyOn(window, "fetch");

  afterEach(() => {
    fetchSpy.mockClear();
    fetchSpy.mockReset();
  });

  test("should fetch questions", async () => {
    component();
    const data = {
      ok: true,
      json: async () =>
        await {
          Response: "True",
          questions: mockState.questions,
        },
    };

    fetchSpy.mockReturnValue(data as never);
    expect((await data.json()).questions.length).toEqual(3);
  });
});
