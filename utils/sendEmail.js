const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // Use nodemailer's built-in transport options or specify your SMTP settings here
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "xperiencedtekie@gmail.com", // Replace with your email address
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent");
  } catch (error) {
    console.error("Error sending email: " + error);
  }
};

module.exports = sendEmail;
