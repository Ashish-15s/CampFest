import tickets from "../models/tickets";
import event from "../models/event";

export const addTickets = async (req, res, next) => {
  const eventId = req.params.eventId;
  const eventTickets = new tickets(req.body);
  try {
    const savedTickets = await eventTickets.save();
  } catch (err) {
    next(err);
  }
};
