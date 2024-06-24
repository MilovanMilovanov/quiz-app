import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Header, { HeaderProps } from "./Header";

const props: HeaderProps = {
  status: "active",
  testId: "header-testId",
};
const component = () => render(<Header {...props} />);

describe("Header Rendering", () => {
  test("Header should be rendered", () => {
    component();
    const headerElement = screen.getByTestId(props.testId!);
    expect(headerElement).toBeVisible();
  });

  test("Should be a Header element", () => {
    component();
    const headerElement = screen.getByTestId(props.testId!);
    expect(headerElement).toHaveRole("banner");
  });

  test("should render an h1 element", () => {
    component();
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeVisible();
    expect(screen.getByText("The React Quiz")).toBeVisible();
  });

  test("Should render the Logo", () => {
    component();
    const logo = screen.getByTestId("svg-logo");
    expect(logo).toBeVisible();
  });
});
