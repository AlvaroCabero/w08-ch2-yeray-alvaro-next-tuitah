/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Tuit from "./Tuit";

describe("Given a Tuit component", () => {
  describe("When it its rendered with a tuit text", () => {
    test("Then it should render a <li> with a text heading inside", () => {
      const tuit = { text: "Hola", likes: 2, date: "" };

      render(<Tuit tuit={tuit} />);

      const heading = screen.getByRole("heading", { name: "Hola" });

      expect(heading).toBeInTheDocument();
    });
  });
});
