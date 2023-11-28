import { ClerkProvider } from "@clerk/nextjs";

import Nav from "../../../components/shared/Nav";
import "../../globals.css";
import AnimateContent from "../../../../components/shared/AnimateContent";

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
          <AnimateContent>
            <Nav />
          </AnimateContent>
          <main className="main">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
