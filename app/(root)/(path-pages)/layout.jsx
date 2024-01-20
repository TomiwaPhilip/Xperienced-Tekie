import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Nav from "../../../components/shared/Nav";
import "../../globals.css";
import Footer from "../../../components/shared/footer/Footer";

export const metadata = {
  title: "Xperienced Tekie",
  description:
    "Real World Experience and Mentorship Internship Platform for the Coding Tekie",
};
const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="">
            <Nav />
          </div>
          <main className="main">{children}</main>
          <div className="">
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
