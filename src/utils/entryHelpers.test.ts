import {
  getCorrectedEntryUrl,
  getEntryFileNameFromFilePath,
  getNormalizedEntryFileName,
  getParentEntryFileName,
} from "./entryHelpers";

describe("getCorrectedEntryUrl", () => {
  it("transforms an Astro URL to our expected format", () => {
    expect(
      getCorrectedEntryUrl("src/entries/foo/bar/baz.mdx", "/fizz/buzz.mdx")
    ).toBe("/foo/bar/buzz");
  });
});

describe("getEntryFileNameFromFilePath", () => {
  it("returns the last segment of the file path", () => {
    expect(getEntryFileNameFromFilePath("foo.md")).toBe("foo.md");
    expect(getEntryFileNameFromFilePath("/foo/bar/baz.md")).toBe("baz.md");
    expect(getEntryFileNameFromFilePath("foo/bar-baz.mdx")).toBe("bar-baz.mdx");
  });

  it("allows for removing the file extension", () => {
    expect(getEntryFileNameFromFilePath("foo.md", true)).toBe("foo");
    expect(getEntryFileNameFromFilePath("/foo/bar/baz.md", true)).toBe("baz");
    expect(getEntryFileNameFromFilePath("foo/bar-baz.mdx", true)).toBe(
      "bar-baz"
    );
  });
});

describe("getNormalizedEntryFileName", () => {
  it("removes the numeric ordering portion of the file name", () => {
    expect(getNormalizedEntryFileName("foo")).toBe("foo");
    expect(getNormalizedEntryFileName("foo--bar-baz")).toBe("foo--bar-baz");
    expect(getNormalizedEntryFileName("foo--1-bar-baz")).toBe("foo--bar-baz");
  });
});

describe("getParentEntryFileName", () => {
  it("removes the double-hyphen portion of the file name", () => {
    expect(getParentEntryFileName("foo")).toBe("foo");
    expect(getParentEntryFileName("foo--")).toBe("foo");
    expect(getParentEntryFileName("foo-bar--1-baz")).toBe("foo-bar");
    expect(getParentEntryFileName("foo-bar--baz")).toBe("foo-bar");
  });
});
