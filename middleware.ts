import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware

export default authMiddleware({
      // These routes will be accessible to all users
      publicRoutes: ["/", "/about", "/api/webhook/clerk"],

      ignoredRoutes: ["/", "/about", "/api/webhook/clerk"]
    });

export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 
