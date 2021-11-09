const mongoose = require("mongoose");
const notificationUtilities = require("./noification_service")
const userModel = require("../../models/user");

const addNotification = async (req, res) => {
    try {
      const user = await userModel.find({userId:req.decoded._id});
      //console.log(user)
      const dataForReportedUser = {
        to: user,
        title: "notification sent!",
        body: "notification sent!",
        linkTo: "notification",
        type: "notification",
        payload: {
          user: user,
          userId: req.decoded._id,
          title: "notification",
          body: "notification sent!",
          message: "notification sent!",
          linkTo: "notification",
          type: "notification",
        },
        seen: false,
        createdAt: new Date(),
      };
  
      const io = req.app.get("io");
      //const n = await notificationUtilities.createNotification(data);
      const n1 = await notificationUtilities.createNotification(dataForReportedUser);
      //io.to(req.data.user.id).emit("report_response", { ...data });
      io.to(user.id).emit("notification", { dataForReportedUser });
      return res.status(200).json({
        success: true,
        message: 'notification sent!',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, isError: true, error });
    }
  };
  

module.exports = [
    addNotification,
  ];