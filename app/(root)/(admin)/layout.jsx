import { ClerkProvider } from "@clerk/nextjs";

import "../../globals.css";

export const metadata = {
  title: "Admin Manager",
  description: "Xperienced Tekie",
};

const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;