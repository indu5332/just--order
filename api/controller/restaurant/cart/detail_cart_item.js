let cartsModel = require("../../../models/cart");
let mongoose = require("mongoose");

let getcartDetail = (req, res, next) => {
  cartsModel.findById({ _id: req.params.cartId }, (err, cartDetail) => {
    if (err) {
      console.log(err);
      return res.json({ success: false, isError: true, error: err });
    } else {
      if (cartDetail != null) {
        console.log(cartDetail);
        return res.json({ success: true, cartDetail: cartDetail });
      } else {
        return res.json({
          success: false,
          message: "No cart exists for the given cart Id.",
        });
      }
    }
  });
};
module.exports = [getcartDetail];