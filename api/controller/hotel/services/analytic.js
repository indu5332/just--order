const serviceModel = require('../../../models/services');
const mongoose = require('mongoose');


let findService = (req, res, next) => {

     let conditions = [
        {
            "$match": {
                $expr: {
                    'hotelid': mongoose.Types.ObjectId(req.decoded._id)
                }
            },
        },
        {
            "$lookup": {
                'from': 'bookings',
                'let': {
                    'hotelid': '$hotelid',
                    'roomtype': '$servicename'
                },
                'pipeline': [
                    {
                        '$match': {
                            '$expr': {
                                '$and': [
                                    {
                                        '$eq': [
                                            '$hotelid', '$$hotelid',
                                        ]
                                    },
                                    {
                                        '$eq': [
                                            '$roomtype', '$$roomtype'
                                        ]
                                    }
                                ]
                            }
                        }
                    },
                ],
                'as': 'booking'
            }

        },

        {
            "$project": {
                'status': 1,
                'rooms': 1,
                'servicename': 1,
                'booking': 1
            }
        },
        {
            $sort: {
                "created": -1
            }
        }
    ];
    console.log(conditions);
    serviceModel.aggregate(conditions, (error, booking) => {
        if (error) {
            console.log(error);
            return res.json({ success: false, isError: true, error: error });
        }
        else {
            return res.json({ success: true, message: "List of services", services: booking });
        }
    });

};


module.exports = [findService];