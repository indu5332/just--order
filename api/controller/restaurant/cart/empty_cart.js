const cartModel = require('../../../models/cart');
const mongoose = require('mongoose');


let deletecart = (req, res, next) => {
    let condition = {
        userId: mongoose.Types.ObjectId(req.decoded._id),
    }
    cartModel.deleteMany(condition, (error, carts) => {
        if (error) {
            return res.json({
                success: false,
                isError: true,
                error: error
            });
        }
        else {
            return res.json({
                success: true,
                message: "carts deleted successfully",
                carts: carts
            })
        }
    });
};

module.exports = [deletecart];