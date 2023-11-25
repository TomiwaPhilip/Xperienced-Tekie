import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware

export default authMiddleware({
  // These routes will be accessible to all users
  publicRoutes: ["/", "/about", "/terms", "/api/user-details", "/api/user-details/:userId", "/api/formsubmission"],

  // ignoredRoutes: ["/", "/about", "/api/formsubmission"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
