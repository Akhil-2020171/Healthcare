import nodemailer from "nodemailer";

const Email = process.env.EMAIL;
const Pass = process.env.PASS;

const handle = async (req, res) => {
  if (req.method == "POST") {
    var data = req.body;
    var bodyJson = JSON.parse(data);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: Email,
        pass: Pass,
      },
    });
    const mailOptions = {
      from: Email,
      to: bodyJson.email,
      subject: "Otp for registration is: ",
      html:
        "<h3>OTP for account verification is </h3>" +
        "<h1 style='font-weight:bold;'>" +
        bodyJson.otp +
        "</h1>", // html body
    };

    try{
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            } else {
              return console.log(info);
            }
          });

        return res.status(400).json({ success: true});
    }catch(e){
        return res.status(400).json({ error: e.message  });
    }

  } else {
    return res.status(400).json({ error: "Invalid Method" });
  }
};

export default handle;
