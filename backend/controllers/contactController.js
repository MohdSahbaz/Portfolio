const nodemailer = require("nodemailer");

exports.sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Set email options with HTML styling
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; background-color: #f9f9f9; color: #333;">
          <h2 style="color: #444;">You have a new message from:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #fff; padding: 15px; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 16px; color: #555; line-height: 1.5;">${message}</p>
          </div>
          <br>
          <p style="font-size: 12px; color: #888;">This message was sent via your portfolio contact form.</p>
        </div>
      `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Error sending the email." });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "Message sent successfully!" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to send the message", error });
  }
};
