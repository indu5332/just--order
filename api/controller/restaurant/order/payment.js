const config = require("config");
const stripe = require("stripe")(config.STRIPE_SK);

module.exports = {
  async buyPlan(plan, paymentMethod) {
    try {
      const paymentMethodDetails = await stripe.paymentMethods.retrieve(paymentMethod);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Number(plan.price) * 100,
        currency: "INR",
        payment_method: paymentMethodDetails.id,
        description: plan.details,
        setup_future_usage: "on_session",
      });
      return stripe.paymentIntents.confirm(paymentIntent.id);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};