import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: process.env.EMAIL_PORT,
      secure: Boolean(process.env.SECURE), // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER, // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
    });
    console.log("email sent successfully");
  } catch (error) {
    console.log(error);
  }
};
