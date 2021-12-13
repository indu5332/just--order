const stripe = require("stripe")(
  "sk_test_51JjMqRSIZHXO46dDyMGZdtlI7QN27S9RatkYQDQoxek1EsnQ3caVUbpVnZ7EInks5Fcb48yPJnohpRyDh2XydEyO003eeMuSva"
);

let paymentIntent = async (req, res) => {
  try {
    const paymentIntents = await stripe.paymentIntents.retrieve(req.body.data);
    if (paymentIntents.status === "succeeded") {
      console.log(paymentIntents);
      return res.status(200).json({
        success: true,
        message: "payment successfull",
        paymentIntents,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Transaction could not be processed",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
module.exports = [paymentIntent];