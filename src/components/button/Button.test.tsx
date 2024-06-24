import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Button, { BtnProps } from "./Button";

const props: BtnProps = {
  testId: "btn-testId",
  className: "btn class",
  disabled: false,
  action: vi.fn(),
};

const component = (props: BtnProps) =>
  render(
    <Button {...props}>
      <p>Button Content</p>
    </Button>
  );

describe("Button Rendering", () => {
  test("Should be vissible", () => {
    component(props);
    const button = screen.getByTestId(props.testId!);
    expect(button).toBeVisible();
  });

  test("Should render children", () => {
    component(props);
    expect(screen.getByText("Button Content")).toBeInTheDocument();
  });

  test("Action function should be called once", () => {
    const { testId, action } = props;
    component(props);
    const button = screen.getByTestId(testId!);

    fireEvent.click(button);
    expect(action).toBeCalledTimes(1);
  });

  test("Should have class name of 'btn' and 'btn-new-class'", () => {
    const currProps = { ...props, className: "btn-new-class" };
    component(currProps);

    const button = screen.getByTestId(props.testId!);
    expect(button).toHaveClass(currProps.className);
    expect(button).toHaveClass("btn");
  });

  test("Button should be enabled by default", () => {
    component(props);
    const button = screen.getByTestId(props.testId!);
    expect(button).not.toHaveAttribute("disabled");
  });

  test("Button should be disabled", () => {
    const currProps = { ...props, disabled: true };
    component(currProps);

    const button = screen.getByTestId(props.testId!);
    expect(button).toHaveAttribute("disabled");
  });
});
