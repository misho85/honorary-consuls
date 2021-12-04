export default async function(req, res) {
  let nodemailer = require('nodemailer');
  const user = process.env.EMAIL;
  const pass = process.env.PASS;
  const mailData = {
    from: req.body.email,
    to: user,
    subject: req.body.subject,
    text: '123',
    html: `<div>
                <div style="margin-bottom: 1rem"><p style="font-weight: bold">From:<p/> <p>Name: ${req
                  .body.firstName +
                  ' ' +
                  req.body.lastName}<br>Email: ${req.body.email}<br> Phone: ${
      req.body.phone
    }</p></div>   <div style="margin-bottom: 1rem"><p style="font-weight: bold">Message:<p/> <p style="padding: 1rem; border: 1px solid grey">${
      req.body.body
    }</p></div>  
    </div>`
  };

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user,
      pass
    },
    secure: true
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function(error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });
  transporter.sendMail(mailData, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.end();
}
