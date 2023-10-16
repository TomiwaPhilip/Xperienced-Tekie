import React from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "../../globals.css";

export const metadata: Metadata = {
  title: "Admin Manager",
  description: "Xperienced Tekie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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