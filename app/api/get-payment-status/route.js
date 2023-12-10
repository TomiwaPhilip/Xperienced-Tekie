import dbConnect from "../../../utils/database";
import Payments from "../../../model/payment";

export const GET = async (req) => {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const reqParams = req.url.split("/");
  const query = reqParams[reqParams.length - 1];
  const urlString = query.split("?")[1]; // Extract the query string part
  const parts = urlString ? urlString.split("&") : [];

  let email = "";

  // Check if there are query parameters
  if (parts.length > 0) {
    // Iterate through the parameters to find an email-like value
    for (const part of parts) {
      const keyValue = part.split("=");
      if (keyValue.length === 2 && keyValue[1]) {
        email = keyValue[1];
        console.log(email);
        break; // Stop after finding the first non-empty parameter
      }
    }
  }

  if (!email) {
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
