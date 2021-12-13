const sgMail = require("@sendgrid/mail");

sgMail.setApiKey("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");

function sendEmail(data) {
  const msg = {
    to: data.receiver,
    from: 'killingspirit5332@gmail.com',
    subject:"reset password",
    templateId:"d-a33144fe14294bcaa1a41e72aa00594c",
    dynamic_template_data: data.templateData,
  }
  sgMail.send(msg, (error, res) => {
    if (error) {
      console.log(error);
    } else {
      console.log("sent", res);
    }
  });
}
exports.sendEmail=sendEmail;