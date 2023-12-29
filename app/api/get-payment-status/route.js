import dbConnect from "../../../utils/database";
import Payments from "../../../model/payment";

export const GET = async (req) => {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const reqParts = req.url.split("/");
  const queryIndex = reqParts.indexOf("api") + 1;
  const urlString = reqParts.slice(queryIndex).join("/");

  const url = new URL(`http://dummyurl.com/${urlString}`);
  const email = url.searchParams.get("email");

  if (email) {
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
