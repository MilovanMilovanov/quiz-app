import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Error, { CustomErrorProps } from "./Error";

const props: CustomErrorProps = {
  testId: "error-testId",
  error: "Something went wrong",
  name: "failed data fetch",
};
const component = (props: CustomErrorProps) => render(<Error {...props} />);

describe("Error Rendering", () => {
  test("Component should be vissible", () => {
    component(props);
    const wrapper = screen.getByTestId(props.testId!);
    expect(wrapper).toBeVisible();
  });
  test("Should render error message", () => {
    component(props);
    expect(screen.getByText(props.error)).toBeInTheDocument();
  });
  test("Should have attribute role=alert", () => {
    component(props);
    const wrapper = screen.getByTestId(props.testId!);
    expect(wrapper).toHaveAttribute("role", "alert");
  });

  test("Should render error icon", () => {
    component(props);
    const icon = screen.getByRole("img");
    expect(icon).toBeVisible();
    expect(icon).toHaveAttribute("aria-label");
  });

  test("Should have the following accessability attributes", () => {
    component(props);
    const wrapper = screen.getByTestId(props.testId!);
    expect(wrapper).toHaveAttribute("aria-labelledby", props.name);
    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("role");
    const errorMessage = screen.getByText(props.error);
    expect(errorMessage).toHaveAttribute("id", props.name);
  });
});
