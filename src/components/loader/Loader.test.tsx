import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Loader, { LoaderProps } from "./Loader";

const loadMessage = "Loading quiz...";
const props: LoaderProps = {
  testId: "loader-testId",
  children: <p>{loadMessage}</p>,
};

const component = () =>
  render(<Loader testId={props.testId}>{props.children}</Loader>);

describe("Loader Rendering", () => {
  beforeEach(() => {
    component();
  });
  test("Loader should be rendered", () => {
    const loader = screen.getByTestId(props.testId!);
    expect(loader).toBeVisible();
  });

  test("Should have a role attribute", () => {
    const loader = screen.getByTestId(props.testId!);
    expect(loader).toHaveAttribute("role", "status");
  });

  test("Should render correct loading message", () => {
    const message = screen.getByText(loadMessage);
    expect(message).toBeVisible();
  });
});
