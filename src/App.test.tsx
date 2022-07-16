/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom"; // eslint-disable-line import/no-unassigned-import

import { render } from "@testing-library/react";

import { App } from "./App";

it("renders Ionic component", () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeInTheDocument();
  expect(baseElement).toBeVisible();
  expect(baseElement.innerHTML).toContain("<ion-app>");
});
