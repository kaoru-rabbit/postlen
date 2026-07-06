import { describe, expect, it } from "vitest";
import { platforms } from "./counters";

function platform(id: string) {
  const p = platforms.find((p) => p.id === id);
  if (!p) throw new Error(`platform not found: ${id}`);
  return p;
}

describe("X (Twitter) weighted counting", () => {
  const x = platform("x");

  it("counts Basic Latin characters as 1 each", () => {
    expect(x.count("hello")).toBe(5);
  });

  it("counts Latin Extended-B and CJK characters as 2 each", () => {
    expect(x.count("こんにちは")).toBe(10);
  });

  it("counts mixed ASCII + CJK text correctly", () => {
    // 5 ASCII (1 each) + 5 CJK (2 each) = 15
    expect(x.count("hello" + "こんにちは")).toBe(15);
  });

  it("counts any URL as exactly 23 regardless of length", () => {
    expect(x.count("https://x.co")).toBe(23);
    expect(x.count("https://example.com/very/long/path?query=param&another=one")).toBe(23);
  });

  it("counts text with a URL as text weight + 23", () => {
    // "check " = 6 ASCII (1 each) = 6, + 23 for URL
    expect(x.count("check https://example.com")).toBe(6 + 23);
  });

  it("counts multiple URLs, each as 23", () => {
    const text = "https://a.com https://b.com";
    // " " between them = 1 ASCII char
    expect(x.count(text)).toBe(23 + 1 + 23);
  });

  it("counts empty string as 0", () => {
    expect(x.count("")).toBe(0);
  });
});

describe("countHashtags (Instagram extras)", () => {
  const instagram = platform("instagram");

  it("counts hashtags in text", () => {
    const extras = instagram.extras!("#foo #bar baz #qux");
    const hashtagExtra = extras.find((e) => e.label === "Hashtags")!;
    expect(hashtagExtra.value).toBe(3);
  });

  it("counts zero hashtags when none present", () => {
    const extras = instagram.extras!("no hashtags here");
    const hashtagExtra = extras.find((e) => e.label === "Hashtags")!;
    expect(hashtagExtra.value).toBe(0);
  });

  it("does not count a bare # with no following text as a hashtag", () => {
    const extras = instagram.extras!("just a # sign");
    const hashtagExtra = extras.find((e) => e.label === "Hashtags")!;
    expect(hashtagExtra.value).toBe(0);
  });
});

describe("plain length-based platforms", () => {
  it.each([
    "instagram",
    "linkedin",
    "threads",
    "youtube-title",
    "youtube-desc",
    "tiktok",
    "meta-desc",
  ])("%s counts raw JS string length", (id) => {
    const p = platform(id);
    expect(p.count("hello world")).toBe("hello world".length);
    expect(p.count("こんにちは")).toBe("こんにちは".length);
  });
});

describe("maxLength sanity", () => {
  it("every platform has a positive maxLength", () => {
    for (const p of platforms) {
      expect(p.maxLength).toBeGreaterThan(0);
    }
  });

  it("has no duplicate platform ids", () => {
    const ids = platforms.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
