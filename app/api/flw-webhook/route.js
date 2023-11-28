import dbConnect from "../../../utils/database";
import Payments from "../../../model/payment";

export const POST = async (req) => {
  // Create an array to store chunks of the stream
  const chunks = [];

  // If you specified a secret hash, check for the signature
  const secretHash = process.env.FLW_SECRET_HASH;
  const signature = req.headers.get("verif-hash");

  if (!signature || signature !== secretHash) {
    // This request isn't from Flutterwave; discard
    console.log("Unverified payload");
    return new Response("Unverified payload", { status: 401 });
  }

  // Read the stream asynchronously
  for await (const chunk of req.body) {
    chunks.push(chunk);
  }

  // Combine the chunks into a single buffer or string
  const bodyData = Buffer.concat(chunks).toString("utf-8");

  // Parse Data
  const parsedData = JSON.parse(bodyData);
  const email = parsedData.data.customer.email;
  const status = parsedData.data.status;

  try {
    // Connect to the database
    await dbConnect();

    // Update the MongoDB collection using Mongoose model
    const filter = { email: email };
    const update = { status: status };
    const options = { new: true, upsert: true }; // Creates a new document if it doesn't exist

    const updatedDocument = await Payments.findOneAndUpdate(filter, update, options);

    console.log('Payment details saved to the database.');
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Error processing webhook', { status: 500 });
  }

  return new Response("Successful webhook consumption", { status: 200 });
};
