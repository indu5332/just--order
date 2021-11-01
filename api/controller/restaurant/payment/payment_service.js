const stripe = require('stripe')('sk_test_51JnHK2SHnHscHf9HeaQgpApblm7ezQlPlRwGPTmiLSmC3R22QjL9ZugI5EwTpzqKT1HrpNOzBjtg5C2StoMmnqZD00Rg98kHWe');
let processPayment =async(req, res,next)=>{
    try {
      const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: {
          number: '4242424242424242',
          exp_month: 09,
          exp_year: 2024,
          cvc: '318',
        },
      });
      //const paymentMethodDetails = await stripe.paymentMethods.retrieve(paymentMethod.id);
      //console.log(paymentMethod.id)
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 2000,
        currency: 'usd',
        payment_method:paymentMethod.id });
      console.log(paymentIntent)
      const paymentIntents = await stripe.paymentIntents.confirm(paymentIntent.id)
      return res.status(200).json({
        success:true,
        paymentIntents:paymentIntents
      })
    } catch (error) {
      throw new Error(error.message);
    }
}

module.exports =[
    processPayment
]