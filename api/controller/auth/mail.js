const sgMail = require("@sendgrid/mail");

sgMail.setApiKey("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");

function sendEmail(data) {
  const msg = {
    to: data.email,
    from: 'nairagarg999@gmail.com',
    subject:"reset password",
    templateId:"d-e6da07c7cf714daebb0ebe64ca868817",
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