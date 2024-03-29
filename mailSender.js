const nodemailer = require("nodemailer");

module.exports = {
    IfCarFound: IfCarFound, 
    IfCarNotFound: IfCarNotFound
}
async function IfCarFound(){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'testingid295@gmail.com',
          pass: '******'
        }
      });
      var mailOptions = {
        from: 'testingid295@gmail.com',
        to: 'guptagovind1410@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'Yeah car booked be ready to drive. Happy journey!'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}

async function IfCarNotFound(){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'testingid295@gmail.com',
          pass: '******'
        }
      });
      var mailOptions = {
        from: 'testingid295@gmail.com',
        to: 'guptagovind1410@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'There are no cars available on your selected time and location.'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}