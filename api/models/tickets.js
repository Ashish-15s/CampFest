import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  maxTickets: {
    type: Number,
    required: true,
  },
  availableTickets: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
});

export default mongoose.model("tickets", ticketsSchema);
