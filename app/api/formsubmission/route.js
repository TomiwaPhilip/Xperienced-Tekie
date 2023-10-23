import dbConnect from "../../../utils/database";
import User from "../../../model/userForm";

export default async function postHandler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const { userId, path } = req.body;

      const newUser = new User({
        userId,
        path,
      });

      await newUser.save();

      res.status(201).json({ message: "User data saved successfully." });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error saving user data." });
    }
 } else {
    console.log(error);
    res.status(405).json({ error: "Method not allowed" });
  }
}
