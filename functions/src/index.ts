import * as functions from "firebase-functions";
import admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import cors from "cors";
const corsHandler = cors({ origin: true });
admin.initializeApp();


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "testovski863@gmail.com",
    pass: "863testovski!",
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    const { email, message, name, phone } = req.body;

    const mailOptions = {
      from: `${name} testovski863@gmail.com`,
      to: "darko.dedovic86@gmail.com",
      subject: "I'M A PICKLE!!!", // email subject
      html: `<p style="font-size: 16px;">Neki tekjst</p>
                <br />
            
            <p>Telefon: ${phone}</p>
            <p>Email: ${email}</p>
            <h3>Poruka:</h3>
            <p>${message}</p>`,
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send(info);
    });
  });
});
