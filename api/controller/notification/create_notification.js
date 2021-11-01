const mongoose = require("mongoose");
const notificationModel = require("../../models/notification");

async function createNotification(req,res) {
  try {
   console.log(req.body)
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createNotification
};