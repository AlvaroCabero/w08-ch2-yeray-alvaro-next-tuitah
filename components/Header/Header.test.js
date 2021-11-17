/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a <ul> with 2 <li> inside", () => {
      render(<Header />);

      const list = screen.getByRole("list");
      const listElements = screen.getAllByRole("listitem");

      expect(list).toContainElement(listElements[0]);
      expect(list).toContainElement(listElements[1]);
    });
  });
});
