"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "saymon.mern@gmail.com",
      pass: "slivfxivgwaamfml",
    },
    secure: true,
  });

  const mailData = {
    from: "saymon.mern@gmail.com",
    to: req.body.email,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
    <div style="width: 400px; background: rgba(255,255,255,0.3); padding:15px;">
      <p>Sent from: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Phone: ${req.body.phone}</p>
      <p>Message: ${req.body.message}</p>
    </div>
    `,
  };

  let info = await transporter.sendMail(mailData);

  console.log("Entire Message Returned: ", info);
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  if (info.response == "250 Message received") {
    res.send("success");
  } else {
    res.send("error");
  }
}

export default main;

// import { SMTPClient } from "emailjs";

// export default function handler(req, res) {
//   const { email } = req.body;
//   // console.log(process.env)

//   const client = new SMTPClient({
//     user: "saymon.mern@gmail.com",
//     password: "slivfxivgwaamfml",
//     host: "smtp.gmail.com",
//     ssl: true,
//   });

//   try {
//     client.send({
//       text: `<div style="width: 100px; height: 100px; background: red">Hello</div>`,
//       from: "saymon.mern@gmail.com",
//       to: email,
//       subject: "testing emailjs",
//     });
//   } catch (e) {
//     res.status(400).end(JSON.stringify({ message: JSON.stringify(e) }));
//     return;
//   }

//   res.status(200).end(JSON.stringify({ message: "Send Mail" }));
// }
