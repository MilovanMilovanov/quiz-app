import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Options, { OptionsProps } from "./Options";

const props: OptionsProps = {
  index: 0,
  answer: 0,
  correctOption: 0,
  testId: "options-testId",
  dispatch: vi.fn(),
  questions: [
    {
      question: "Which is the most popular Framework?",
      options: ["React", "Angular", "Vue"],
      correctOption: 0,
      points: 20,
    },
  ],
};

const component = () => render(<Options {...props} />);

describe("Options rendering", () => {
  beforeEach(() => {
    component();
  });
  test("Should render <ul> element", () => {
    const ul = screen.getByTestId(props.testId!);
    expect(ul).toBeVisible();
  });

  test("Should render options all options", () => {
    const options = props.questions.at(0)!.options;
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeVisible();
    });
  });
});
