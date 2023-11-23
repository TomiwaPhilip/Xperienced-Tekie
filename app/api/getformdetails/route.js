import dbConnect from "../../../utils/database";
import User from "../../../model/userForm";

export const GET = async (request) => {
  if (request.method === "GET") {
    try {
      // Connect to the MongoDB database
      await dbConnect();

      if (request.query && request.query.userId) {
        console.log(request.query);
        const { userId } = request.query;

        // Find the user in the database
        const user = await User.findOne({ userId: userId }).in("users");

        if (user) {
          const path = user.path;
          return new Response(JSON.stringify({ path }), { status: 200 });
          // return new Response.json({ path }, { status: 200 });
        } else {
          console.log("User not found");
          return new Response("User not found!", { status: 404 });
        }
      } else {
        return new Response("Missing userId in query parameters", {
          status: 400,
        });
      }
    } catch (error) {
      console.error("Error fetching user data:", error); // Log the error
      return new Response("Internal server error!", { status: 500 });
    }
  } else {
    return new Response("Method not allowed", { status: 405 });
  }
};
