import { auth } from "./auth";

import {
  authRoutes,
  apiAuthPrefix,
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "./routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  if (publicRoutes.includes(nextUrl.pathname)) return;

  if (nextUrl.pathname.startsWith(apiAuthPrefix)) return;

  if (authRoutes.includes(nextUrl.pathname)) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!publicRoutes.includes(nextUrl.pathname) && !isLoggedIn) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
