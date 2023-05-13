import user from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const User = await user.findOne({ username: req.body.username });
    if (!User) return next(createError(404, "User not found!"));
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      User.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "wrong password or username"));
    const token = jwt.sign(
      { id: User._id, isAdmin: User.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherDetails } = User._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
