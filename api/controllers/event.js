import event from "../models/event.js";

export const createEvent = async (req, res, next) => {
  const newEvent = new event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {
    next(err);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const updatedEvent = await event.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedEvent);
  } catch (err) {
    next(err);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const deletedEvent = await event.findByIdAndDelete(req.params.id);
    res.status(200).json("event has been deleted ");
  } catch (err) {
    next(err);
  }
};
export const getEvent = async (req, res, next) => {
  try {
    const Event = await event.findById(req.params.id);
    res.status(200).json(Event);
  } catch (err) {
    next(err);
  }
};
export const getAllEvent = async (req, res, next) => {
  // const {min,max,...others}=req.query  .limit(req.query.limit)
  console.log("d");
  try {
    const Events = await event.find(req.query);
    res.status(200).json(Events);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return event.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  const technicalCount = await event.countDocuments({ type: "technical" });
  const culturalCount = await event.countDocuments({ type: "cultural" });
  const sportsCount = await event.countDocuments({ type: "sports" });
  const socialCount = await event.countDocuments({ type: "social" });

  try {
    res.status(200).json([
      { type: "technical", count: technicalCount },
      { type: "cultural", count: culturalCount },
      { type: "sports", count: sportsCount },
      { type: "social", count: socialCount },
    ]);
  } catch (err) {
    next(err);
  }
};
