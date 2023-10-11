import { ClerkProvider } from "@clerk/nextjs";

import DashboardNav from "../../../components/dashboard/DashboardNav";
import SideBar from "../../../components/dashboard/SideBar";
import "../../globals.css";

export const metadata = {
  title: "Xperienced Tekie",
  description: "My Dashboard",
}

const Dashboardlayout = ({ children }) => {
  return (
    <ClerkProvider>
        <html>
            <body>
              <nav>
                <DashboardNav />
              </nav>
              <SideBar />
                <main className="main">
                    { children }
                </main>
            </body>
        </html>
    </ClerkProvider>
    
  );
}

export default Dashboardlayout;