import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import "../../globals.css";
import DashNav from "../../../components/dashboard/dashNav/DashNav";

export const metadata = {
  title: "Xperienced Tekie",
  description: "My Dashboard",
};

const DashboardLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <html>
        <body>
          <main className="h-full">
            <DashNav />
            {children}
          </main>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default DashboardLayout;
