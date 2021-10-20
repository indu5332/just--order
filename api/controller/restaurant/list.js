const restaurantSchema = require('../../models/restaurant');
const config = require('config');
const mongoose = require('mongoose');



let findAllRestaurants = async (req, res, next) => {
    try {
        
        let Allresturants = await restaurantSchema.find({});
        if (Allresturants.length > 0) {
            await Promise.all(Allresturants.map(async resturant => {
                resturant.image = config.fileUrl + '/' + resturant.image
            }));
            console.log(Allresturants)
        }
        return res.status(200).json({
            success: true,
            message: 'Restaurant list',
            restaurants: Allresturants
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