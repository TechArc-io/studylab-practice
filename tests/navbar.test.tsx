import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navbar } from "@/src/components/Navbar";

describe("Navbar", () => {
  it("opens and closes the mobile menu", () => {
    render(<Navbar />);

    const button = screen.getByRole("button", { name: /open menu/i });

    expect(button).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("link", { name: "Assignments" }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /close menu/i }));

    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});