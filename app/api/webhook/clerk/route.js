import { NextResponse } from "next/server";
import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';

// Import the sendEmail function from the utility file
import sendEmail from "../../../../utils/sendEmail";


async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new SVIX instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log('Webhook body:', body);

  return new Response('', { status: 201 });
}

export default POST;



// Define an asynchronous function named "handler" that takes two parameters: "req" (the request) and "res" (the response).
// export default async function handler(req, res) {
//   if (event == true) {
//     // Check if the HTTP method of the request is POST (usually how webhooks send data).
//     if (req.method === "POST") {
//       // Parse the JSON data from the request body, which is typically sent by the Clerk webhook.
//       const data = req.body; // JSON data from the Clerk webhook

//       // Extract relevant information from the data received from the webhook.
//       const userEmail = data.email_address; // Extract the user's email
//       const userName = data.first_name; // Extract the user's name

//       // Compose the email subject and text.
//       const emailSubject = "Welcome to our service";
//       const emailText = `Hello ${userName},\n\nThank you for signing up!`;

//       // Use the sendEmail function to send the email.
//       sendEmail(userEmail, emailSubject, emailText);

//       // Send a response with a status code of 200 (OK) to acknowledge that the request was handled successfully.
//       res.status(200).end();
//     } else {
//       // If the HTTP method is not POST, send a response with a status code of 405 (Method Not Allowed).
//       res.status(405).end();
//     }
//   } else {
//     console.log("Incompatible signatures");
//   }
// }
