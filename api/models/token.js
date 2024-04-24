import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "user",
      unique: true,
    },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now(), expires: 3600 },
  },
  { timestamps: true }
);

export default mongoose.model("token", tokenSchema);
