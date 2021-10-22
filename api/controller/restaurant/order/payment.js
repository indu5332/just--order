const config = require("config");
const stripe = require("stripe")(config.STRIPE_SK);

module.exports = {
  async createorder(paymentMethod) {
    try {
      const paymentMethodDetails = await stripe.paymentMethods.retrieve(paymentMethod);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Number(plan.price) * 100,
        currency: "INR",
        payment_method: ['card'],
        description: cart.details,
        setup_future_usage: "on_session",
      });
      return stripe.paymentIntents.confirm(paymentIntent.id);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};