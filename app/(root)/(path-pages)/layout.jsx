import { ClerkProvider } from "@clerk/nextjs";

import Nav from "../../../components/shared/Nav";
import "../../globals.css";

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
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
