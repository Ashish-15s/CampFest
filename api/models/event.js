import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  photos: {
    type: [String],
  },
});

export default mongoose.model("event", eventSchema);
