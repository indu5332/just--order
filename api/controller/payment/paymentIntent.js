const stripe = require("stripe")(
  "sk_test_51JjMqRSIZHXO46dDyMGZdtlI7QN27S9RatkYQDQoxek1EsnQ3caVUbpVnZ7EInks5Fcb48yPJnohpRyDh2XydEyO003eeMuSva"
);

let paymentIntent = async (req, res) => {
  try {
    //console.log(process.env.SK_KEY)

    const {
      amount,
      currency,
      description,
      name,
      line1,
      phone,
      postal_code,
      country,
    } = req.body;
    const total = Number(amount) * 100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total.toFixed(0),
      description,
      currency,
      shipping: {
        name,
        address: {
          line1,
          postal_code,
          country,
        },
        phone,
      },
    });
    if (paymentIntent) {
      console.log(paymentIntent);
      return res.status(200).json({
        success: true,
        paymentIntent,
      });
    } else {
      return res.status(404).json({
        success: true,
        message: "bad request",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = [paymentIntent];
