import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resolveAppUrl } from "./app-url";

describe("resolveAppUrl", () => {
  const originalEnv = process.env.NEXT_PUBLIC_APP_URL;

  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_APP_URL;
  });

  afterEach(() => {
    if (originalEnv === undefined) {
      delete process.env.NEXT_PUBLIC_APP_URL;
    } else {
      process.env.NEXT_PUBLIC_APP_URL = originalEnv;
    }
  });

  it("uses the request origin when the env value points to localhost", () => {
    process.env.NEXT_PUBLIC_APP_URL = "http://localhost:7400";

    const req = {
      headers: new Headers({
        host: "cacti-stock-two.vercel.app",
        "x-forwarded-proto": "https",
      }),
      nextUrl: {
        origin: "https://cacti-stock-two.vercel.app",
        host: "cacti-stock-two.vercel.app",
        protocol: "https:",
      },
    } as any;

    expect(resolveAppUrl(req)).toBe("https://cacti-stock-two.vercel.app");
  });

  it("prefers a production URL from env when it is provided", () => {
    process.env.NEXT_PUBLIC_APP_URL = "https://example.com";

    expect(resolveAppUrl()).toBe("https://example.com");
  });
});
