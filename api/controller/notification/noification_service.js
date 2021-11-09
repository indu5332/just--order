const mongoose = require("mongoose");
const notificationModel = require("../../models/notification");
const userModel = require("../../models/user");

module.exports = {
  async createNotification(notificationData, io, event,req) {
    const newNotification = await notificationModel.create(notificationData);
    if (newNotification) {
      if (io) {
        const user = await userModel.find({userId:req.decoded._id});
        const data = {
          ...notificationData,
          payload: {
            ...newNotification.payload,
            user: { ...user },
          },
          createdAt: new Date(),
        };
        //console.log(data);
        console.log(notificationData.to.id);
        io.to(notificationData.to.id).emit(event, { ...data });
      }
      return true;
    }
    return false;
  },
};