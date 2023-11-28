import { Schema, model, models } from "mongoose";

const paymentSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  }, 
  status: {
    type: String,
    required: true,
    enum: ["success", "failed"], // Assuming status can only be "success" or "failed"
    default: "failed", // Default value if not provided
  },
});

const Payments = models.Payments || model("Payments", paymentSchema);

export default Payments;
