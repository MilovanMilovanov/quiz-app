import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Footer, { FooterProps } from "./Footer";

const props: FooterProps = {
  testId: "footer-testId",
  children: <p>Footer content</p>,
};

const component = () =>
  render(<Footer testId={props.testId}>{props.children}</Footer>);

describe("Footer Rendering", () => {
  test("Footer should be vissible", () => {
    component();
    const footer = screen.getByTestId(props.testId!);
    expect(footer).toBeInTheDocument();
  });

  test("Should render children", () => {
    component();
    const content = screen.getByText("Footer content");
    expect(content).toBeInTheDocument();
    expect(content).toBeVisible();
  });
});
