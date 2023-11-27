import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  }, // You can add more fields like email, name, etc.
  path: {
    type: String,
    required: true,
    unique: false,
  }, // Internship path
  location: {
    type: String,
    required: true,
    unique: false,
  }, // user Location.
  paid: {
    type: Boolean,
    required: false,
    unique: false,
    default: false,
  }, // user certificate payment
});

const User = models.User || model("User", userSchema);

export default User;
