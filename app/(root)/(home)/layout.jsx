import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Nav from "../../../components/shared/Nav";
import "../../globals.css";
import Footer from "./../../../components/shared/footer/Footer";
import AnimateContent from "../../../components/shared/AnimateContent";

export const metadata = {
  title: "Xperienced Tekie",
  description:
    "Become a Top 1% Dev | Real World Experience and Mentorship Internship Platform for the Coding Tekie",
};
const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <AnimateContent>
            <Nav />
          </AnimateContent>
          <main className="main">{children}</main>
          <div className="">
            <AnimateContent>
              <Footer />
            </AnimateContent>
          </div>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
