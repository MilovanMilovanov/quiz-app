import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Option from "./Option";
import { OptionsProps } from "../options/Options";

const props: Omit<OptionsProps, "questions" | "dispatch"> = {
  index: 1,
  answer: 1,
  onClick: vi.fn(),
};

const component = () => render(<Option {...props} />);

describe("Option rendering", () => {
  beforeEach(() => {
    component();
  });
  test("Should render <li>", () => {
    const li = screen.getByRole("button");
    expect(li).toBeVisible();
  });
  test("Should call the onClick function once", () => {
    const li = screen.getByRole("button");
    fireEvent.click(li);
    expect(props.onClick).toBeCalledTimes(1);
  });
});
