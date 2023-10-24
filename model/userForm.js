import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  }, // You can add more fields like email, name, etc.
  path: {
    type: String,
    required: true,
    unique: true,
  }, // Internship path
});

const User = models.User || model("User", userSchema);

export default User;
