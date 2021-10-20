const restaurantSchema = require('../../models/restaurant');
const config = require('config');
const mongoose = require('mongoose');



let findAllRestaurants = async (req, res, next) => {
    try {
        
        let allresturants = await restaurantSchema.find({});
        if (allresturants.length > 0) {
            await Promise.all(allresturants.map(async resturant => {
                resturant.image = config.fileUrl + '/' + resturant.image
            }));
            console.log(allresturants)
        }
        return res.status(200).json({
            success: true,
            message: 'Restaurant list',
            restaurants: allresturants
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            isError: true,
        })
    }
}

module.exports = [
    findAllRestaurants
]