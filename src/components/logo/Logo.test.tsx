import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Logo from "./Logo";

const testId = "logo-testId";

const component = () => render(<Logo testId={testId} />);

describe("Logo rendering", () => {
  test("Should render the Logo", () => {
    component();
    const logo = screen.getByTestId(testId);
    expect(logo).toBeVisible();
  });
});
