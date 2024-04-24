import user from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import Token from "../models/token.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new user({
      ...req.body,
      password: hash,
    });

    await newUser.save();

    const token = await new Token({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const url = `${process.env.BASE_URL}/${newUser._id}/verify/${token.token}`;
    await sendEmail(newUser.email, "Verify Email", url);

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

    if (!User.verified) {
      let token = await Token.findOne({ userId: User._id });
      if (!token) {
        console.log("Fd");
        token = await new Token({
          userId: User._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();

        const url = `${process.env.BASE_URL}/${User._id}/verify/${token.token}`;
        await sendEmail(User.email, "Verify Email", url);
      }

      return next(createError(400, "Email not verified"));
    }

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
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};

export const verify = async (req, res, next) => {
  try {
    const User = await user.findOne({ _id: req.params.id });
    if (!User) return next(createError(400, "invalid link"));

    const token = await Token.findOne({
      userId: User._id,
      token: req.params.token,
    });
    if (!token) return next(createError(400, "invalid link"));
    await User.updateOne({ _id: user._id, verified: true });
    // await token.remove();
    await Token.deleteOne({ token: token.token });
    res.status(200).send("User has been verified");
  } catch (err) {
    console.log(err);
    console.log("not verify");
    next(err);
  }
};
