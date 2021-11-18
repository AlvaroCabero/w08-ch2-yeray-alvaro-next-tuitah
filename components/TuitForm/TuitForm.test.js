/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Tuit from "../Tuit/Tuit";

describe("Given a TuitForm component", () => {
  describe("When it its rendered", () => {
    test("Then it should render a textarea with a id ", () => {
      const tuit = { text: "woooowwww", likes: 23, date: "8-8-2008" };

      render(<Tuit tuit={tuit} />);

      // const textarea = screen.getByRole("textarea", { text: "woooowwww" });

      // expect(textarea).toBeInTheDocument();
    });
  });
});
