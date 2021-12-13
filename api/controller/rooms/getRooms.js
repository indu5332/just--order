const roomModel = require("../../models/rooms");
const mongoose = require("mongoose");
const config = require("config");

let listrooms = async (req, res, next) => {
  try {
    const allrooms = await roomModel.find({
      hotelId: mongoose.Types.ObjectId(req.params.hotelId),
    });
    await Promise.all(
      allrooms.map(async (room) => {
        room.type.image = config.fileUrl + "/rooms/" + room.type.image;
        console.log(allrooms);
      })
    );
    return res.status(200).json({
      success: true,
      message: "rooms List",
      rooms: allrooms,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = [listrooms];