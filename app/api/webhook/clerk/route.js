// Import the sendEmail function from the utility file
import sendEmail from "../../../../utils/sendEmail";

// Define an asynchronous function named "handler" that takes two parameters: "req" (the request) and "res" (the response).
export default async function handler(req, res) {
  // Check if the HTTP method of the request is POST (usually how webhooks send data).
  if (req.method === 'POST') {
    // Parse the JSON data from the request body, which is typically sent by the Clerk webhook.
    const data = req.body; // JSON data from the Clerk webhook

    // Extract relevant information from the data received from the webhook.
    const userEmail = data.email; // Extract the user's email
    const userName = data.name;   // Extract the user's name

    // Compose the email subject and text.
    const emailSubject = 'Welcome to our service';
    const emailText = `Hello ${userName},\n\nThank you for signing up!`;

    // Use the sendEmail function to send the email.
    sendEmail(userEmail, emailSubject, emailText);

    // Send a response with a status code of 200 (OK) to acknowledge that the request was handled successfully.
    res.status(200).end();
  } else {
    // If the HTTP method is not POST, send a response with a status code of 405 (Method Not Allowed).
    res.status(405).end();
  }
}
