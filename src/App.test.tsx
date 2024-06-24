import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

describe("App Rendering", () => {
  test("App should be rendered", () => {
    const component = render(
      <Router>
        <App />
      </Router>
    );
    expect(component).toBeTruthy();
  });
});
