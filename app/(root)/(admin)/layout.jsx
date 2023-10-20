import { ClerkProvider } from "@clerk/nextjs";
import { redirect } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { withServerSideAuth } from '@clerk/nextjs/api';

import "../../globals.css";

export const metadata = {
  title: "Admin Manager",
  description: "Xperienced Tekie",
};

const getServerSideProps = withServerSideAuth({ loadUser: true});

const RootLayout = ({ children }) => {
  const { user } = useUser();
  const clerkId = "user_2WZNhGBCcvBfCn9Dri7CUsCZGTJ"; // Replace with the clerk's username

  if (user && user.id !== clerkId) {
    // Redirect to the dashboard page if the user IDs don't match
    alert("Restricted page for admins only!!!");
    redirect('/dashboard');
  };

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

export default { getServerSideProps, RootLayout };