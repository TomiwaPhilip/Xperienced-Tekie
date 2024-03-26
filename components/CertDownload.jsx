import { useState } from "react";
import { useUser } from "@clerk/nextjs";

import NullPayment from "./dashboard/devCard/NullPayment";
import FailedPayment from "./dashboard/devCard/FailedPayment";
import CertDownloadForm from "./dashboard/devCard/CertDownloadForm";

const CertDownload = () => {
  const [status, setStatus] = useState(null);
  const { user } = useUser();

  const email = user && user.primaryEmailAddress;

  console.log(email);

  if (email) {
    fetch(`/api/get-payment-status/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status);
        console.log("Payment Status:", data.status);
      })
      .catch((error) => console.error("Error fetching payment status:", error));
  }

  return (
    <div>
      {status === null && <NullPayment />}
      {status === "failed" && <FailedPayment />}
      {status === "successful" && <CertDownloadForm />}
    </div>
  );
};

export default CertDownload;
