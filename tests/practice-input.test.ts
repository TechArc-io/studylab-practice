import { describe, expect, it } from "vitest";
import { parsePracticeInput } from "@/src/lib/practice-input";

describe("parsePracticeInput", () => {
  it("trims and returns a valid practice item", () => {
    expect(parsePracticeInput({ title: "  Add tests ", description: "  Cover the empty state. " })).toEqual({
      title: "Add tests",
      description: "Cover the empty state.",
    });
  });

  it("rejects untrusted input that does not satisfy the contract", () => {
    expect(() => parsePracticeInput({ title: "x", description: "short" })).toThrow();
  });
});
