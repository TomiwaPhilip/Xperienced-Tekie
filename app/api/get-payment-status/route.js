import dbConnect from "../../../utils/database";
import Payments from "../../../model/payment";

export const GET = async (req) => {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const reqParams = req.url.split("/");
  console.log(reqParams);
  const query = reqParams[reqParams.length - 1];
  const urlString = query.replace(/^email=/, "");
  const parts = urlString.split("?");

  let email = "";

  // Check if there is a query string
  if (parts.length === 2) {
    email = parts[1];
    console.log(email);
  } else {
    console.log("No email found");
  }

  try {
    // Connect to the database
    await dbConnect();

    // Query the database for the payment status
    const payment = await Payments.findOne({ email });

    if (!payment) {
      return new Response("Payment not found", { status: 404 });
    }

    // Send the payment status in the response
    return new Response(JSON.stringify({ status: payment.status }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error querying database:", error);
    return new Response("Internal server error", { status: 500 });
  }
};
