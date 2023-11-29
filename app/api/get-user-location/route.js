import dbConnect from "../../../utils/database";
import User from "../../../model/userForm";

export const GET = async (req) => {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const reqParams = req.url.split("/");
  const query = reqParams[reqParams.length - 1];
  const urlString = query.replace(/^userId=/, "");
  const parts = urlString.split("?");

  let userId = "";

  // Check if there is a query string
  if (parts.length === 2) {
    userId = parts[1];
    console.log(userId);
  } else {
    console.log("No userId found");
  }

  try {
    // Connect to the database
    await dbConnect();

    // Query the database for the location
    const location = await User.findOne({ userId });

    if (!location) {
      return new Response("User Location not found", { status: 404 });
    }

    // Send the location in the response
    return new Response(JSON.stringify({ location: User.location }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error querying database:", error);
    return new Response("Internal server error", { status: 500 });
  }
};
