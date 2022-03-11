const router = require("express").Router();
const fetch = require("node-fetch");
const client = require("@mailchimp/mailchimp_marketing");
const nodemailer = require("nodemailer");

router.post("/signup", (req, res) => {
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "pending",
      },
    ],
  };

  const postData = JSON.stringify(data);

  fetch("https://us14.api.mailchimp.com/3.0/lists/df6941112c", {
    method: "POST",
    headers: {
      Authorization: "auth 73bd2ef341e02c224236df57e959926f-us14",
    },
    body: postData,
  })
    .then(res.status(200).json("ok"))
    .catch((err) => res.status(500).json(err));
});

router.get("/list", (req, res) => {
  client.setConfig({
    apiKey: "73bd2ef341e02c224236df57e959926f-us14",
    server: "us14",
  });

  const run = async () => {
    const response = await client.lists.getListMembersInfo("df6941112c");
    const members = response.members
      .map((member) => member.email_address)
      .join(",");

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
          user: "ecomm.fitop@gmail.com", // generated ethereal user
          pass: "talbi123456789", // generated ethereal password
        },
      });

    const info = await transporter.sendMail({
        from: "ecomm.fitop@gmail.com", // sender address
        bcc : members, // list of receivers
        subject: "test ", // Subject line
        text: "bonjour\n\n"
                + " test testtesttesttesttesttesttesttesttesttest \ntest testtesttesttesttesttesttesttesttesttest \ntest testtesttesttesttesttesttesttesttesttest \ntest testtesttesttesttesttesttesttesttesttest \n" + 
                "cordialement " 
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  };

  run().catch(console.error);
});

module.exports = router;
