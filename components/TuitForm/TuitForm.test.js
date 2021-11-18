describe("Given a TuitForm component", () => {
  describe("When it its rendered", () => {
    test("Then it should render a textarea with a id ", () => {
      const tuit = { text: "Hola", likes: 2, date: "" };

      render(<Tuit tuit={tuit} />);

      const heading = screen.getByRole("heading", { name: "Hola" });

      expect(heading).toBeInTheDocument();
    });
  });
});
