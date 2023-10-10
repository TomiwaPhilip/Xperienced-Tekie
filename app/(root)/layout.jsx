import { ClerkProvider } from "@clerk/nextjs";

import Nav from "../../components/shared/Nav";
import "../globals.css";


export const metadata = {
    title: "Xperienced Tekie",
    description: "Real World Experience and Mentorship Internship Platform for the Coding Tekie",
}
const RootLayout = ({children}) => (
    <ClerkProvider>
        <html lang="en">
            <body className="gradient dark:gradient_dark">
                <div className="">
                    <Nav />
                </div>
                <main className="main">
                    {children}
                </main>
            </body>
        </html>
    </ClerkProvider>
)

export default RootLayout;