import { ClerkProvider } from "@clerk/nextjs";

import DashboardNav from "../../../components/dashboard/DashboardNav";
import "../../globals.css";

export const metadata = {
  title: "Xperienced Tekie",
  description: "My Dashboard",
}

const DashboardLayout = ({ children }) => {
  return (
    <ClerkProvider>
        <html>
            <body>
              <nav>
                <DashboardNav />
              </nav>
              {/* <SideBar /> */}
              <main className="main">
                { children }
              </main>
              {/* <BottomBar /> */}
            </body>
        </html>
    </ClerkProvider>
    
  );
}

export default DashboardLayout;