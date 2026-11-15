import { describe, expect, it } from "vitest";
import { ROUTES } from "./routes";

const entries = Object.entries(ROUTES);

describe("ROUTES", () => {
  it("has a title and description for every route", () => {
    for (const [path, meta] of entries) {
      expect(meta.title, path).not.toBe("");
      expect(meta.description, path).not.toBe("");
    }
  });

  it("keeps descriptions short enough for search snippets", () => {
    for (const [path, meta] of entries) {
      expect(meta.description.length, path).toBeLessThanOrEqual(160);
    }
  });

  it("has no em dashes in meta copy", () => {
    for (const [path, meta] of entries) {
      expect(`${meta.title}${meta.description}`, path).not.toContain("—");
    }
  });

  it("uses unique titles", () => {
    const titles = entries.map(([, meta]) => meta.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
