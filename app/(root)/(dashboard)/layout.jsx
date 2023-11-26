import { ClerkProvider } from "@clerk/nextjs";

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
          <main className="">
            <DashNav />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default DashboardLayout;
