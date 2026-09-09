const transporter = require("../config/mail");

const sendContactMessage = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email.",
      });
    }

    // Email sent to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

      to: process.env.RECEIVER_EMAIL,

      replyTo: email,

      subject: `Portfolio Contact: ${subject}`,

      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; padding: 30px;">

          <h2 style="margin-bottom: 20px;">
            New Portfolio Contact
          </h2>

          <div style="margin-bottom: 15px;">
            <strong>Name:</strong>
            <p>${name}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong>Email:</strong>
            <p>${email}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong>Subject:</strong>
            <p>${subject}</p>
          </div>

          <div>
            <strong>Message:</strong>

            <p style="
              background: #f5f5f5;
              padding: 15px;
              border-radius: 8px;
              line-height: 1.6;
            ">
              ${message}
            </p>
          </div>

        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(
      "Contact email error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to send message right now.",
    });
  }
};

module.exports = {
  sendContactMessage,
};