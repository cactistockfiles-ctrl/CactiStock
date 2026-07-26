import { NextRequest } from "next/server";

export function resolveAppUrl(req?: NextRequest | { headers: Headers; nextUrl?: { origin?: string; host?: string; protocol?: string } }): string {
  const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
  const requestOrigin = req?.nextUrl?.origin?.trim();

  if (requestOrigin) {
    const isLocalhost = /^(https?:\/\/)?(localhost|127\.0\.0\.1)(:\d+)?$/i.test(requestOrigin);
    const isLocalhostConfigured = configuredAppUrl && /^(https?:\/\/)?(localhost|127\.0\.0\.1)(:\d+)?$/i.test(configuredAppUrl);

    if (!isLocalhostConfigured) {
      return configuredAppUrl || requestOrigin;
    }

    return requestOrigin;
  }

  if (configuredAppUrl && !/^(https?:\/\/)?(localhost|127\.0\.0\.1)(:\d+)?$/i.test(configuredAppUrl)) {
    return configuredAppUrl;
  }

  if (req?.headers) {
    const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
    const proto = req.headers.get("x-forwarded-proto") || "https";

    if (host) {
      return `${proto}://${host}`;
    }
  }

  return configuredAppUrl || "http://localhost:7400";
}
