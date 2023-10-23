"use client"

import { redirect } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

import DashboardNav from '../../../../components/dashboard/DashboardNav';
import BarsContent from '../../../../components/dashboard/BarsContent';

const Page = () => {
  const { user } = useUser();
  const clerkId = "user_2WZNhGBCcvBfCn9Dri7CUsCZGTJ"; // Replace with the clerk's user ID

  if (user && user.id !== clerkId) {
    // Redirect to the dashboard page if the user IDs don't match
    alert("Restricted page for admins only!!!");
    redirect('/dashboard');
  };

  return (
    <section>
      <DashboardNav />
      <BarsContent />
    </section>
  );
};

export default Page;
