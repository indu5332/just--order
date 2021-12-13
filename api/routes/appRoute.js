const express=require("express");
const appRoute=express.Router();
const controller=require("../controller");
const checkImage=require("../controller/hotel/checkimage");

const multer = require("multer");
const Path = require("path");

const p = Path.join(`${__dirname}../../uploads/`);

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, p + req.query.folder);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
appRoute.post("/upload", multer({ storage: storage }).single("file"),controller.file.upload );

appRoute.get("/",controller.home)
appRoute.post("/signup",controller.auth.signup);
appRoute.post("/login",controller.auth.login);

appRoute.post("/send-resetmail", controller.auth.sendVerificationLink);
appRoute.post("/verify-email-token", controller.auth.verifyEmailToken);
appRoute.post("/reset", controller.auth.resetPassword);

appRoute.get("/view/hotels",controller.hotel.viewhotels);
appRoute.get("/hotel/services/list",controller.hotel.services.list_service);

//admin work
appRoute.get('/currentuser',controller.auth.current_user); 
appRoute.post("/hotel/login",controller.hotel.auth.login);
appRoute.post('/restaurant/login',controller.restaurant.auth.login);
appRoute.get('/restaurant/list',controller.restaurant.list);
appRoute.get("/view/hotels",controller.hotel.viewhotels);

appRoute.use(controller.authentication);

//favourite
appRoute.post("/add/favourite",controller.favourite.addFavourite)
appRoute.get("/list/favourite",controller.favourite.listFavourite)
appRoute.delete("/remove/favourite/:favouriteId",controller.favourite.deleteFavourite)

appRoute.post("/add/review",controller.review.add_review)
appRoute.get("/list/review/:modelid",controller.review.list_review)
//appRoute.get("/list/resturant/review/:resturantId",controller.restaurant.list_review)
appRoute.get("/delete/review/:reviewId",controller.review.delete_review)

//appRoute.post("/reset-password", controller.auth.resetpassword);
appRoute.get("/user",controller.user.userdetails);
appRoute.post("/change-password",controller.auth.change_password);
appRoute.post("/user/update",controller.user.update);
appRoute.post("/add/hotel",controller.hotel.addhotel);
appRoute.get("/view/hotel/:hotelId",controller.hotel.hotels);
appRoute.get('/view/available/services/:serviceId',controller.hotel.rooms.check_room_avilable);
appRoute.put("/update/hotel/:hotelId/:type",controller.hotel.update);
appRoute.delete("/delete/hotel/:hotelId",controller.hotel.delete);
appRoute.post("/update/hotel/image/:hotelId",checkImage.single('hotelImage'),controller.hotel.updateimage);
appRoute.get("/view/rooms/:hotelId",controller.rooms.getRooms);
appRoute.post("/add/room",controller.rooms.addRoom);
appRoute.put("/update/rooms/:roomId",controller.rooms.updateRoom);
appRoute.post("/update/rooms/image/:roomId",checkImage.single('roomImage'),controller.rooms.updateRoomImage);

appRoute.get("/view/region",controller.region.regions);
appRoute.post("/create/region",controller.region.addregions);
appRoute.get('/view/city/:regionName',controller.city.getcity);
appRoute.post("/add/country",controller.region.addcountry);
appRoute.get("/view/countries",controller.region.country);
appRoute.get("/view/country/region/:countryname",controller.region.find_region);


appRoute.post('/add/other',controller.other.add_service);
appRoute.get('/list/other/:otherItemId',controller.other.list_service);
appRoute.get('/other/delete/:itemId',controller.other.delete_service);

appRoute.post('/other/service/add',controller.otherService.add_other_service)
appRoute.get('/other/service/delete/:serviceId',controller.otherService.delete_other_service)
appRoute.get('/other/service/list',controller.otherService.list)

appRoute.get('/list/areacode',controller.areacode.list_area_code);

appRoute.post("/add/hotel/booking",controller.hotel.booking.add_booking);
appRoute.get("/list/hotel/booking",controller.hotel.booking.list_booking);
appRoute.delete("/delete/hotel/booking/:bookingId",controller.hotel.booking.delete_booking);
appRoute.post("/update/hotel/booking/:bookingId",controller.hotel.booking.update_booking);
appRoute.get("/hotel/check/detail/booking/:bookingId",controller.hotel.booking.check_booking);
// appRoute.GETget("/update/device/token/:deviceId",controller.hotel.device);
appRoute.post("/hotel/add/service",controller.hotel.services.add_services);

appRoute.get("/delete/hotel/services/:serviceId",controller.hotel.services.delete_service);
appRoute.post("/update/hotel/services/:serviceId",controller.hotel.services.update_service);
appRoute.get("/hotel/service/analytic",controller.hotel.services.analytic);
// appRoute.post("/hotel/password/change",controller.hotelauth.change_password);
appRoute.post('/restaurant/add',controller.restaurant.add_restaurant);

//address
appRoute.post('/address/add',controller.address.create);
appRoute.get('/address/detail',controller.address.detail);
appRoute.post('/address/update',controller.address.update);

//payment API
appRoute.post('/create-payment-intent',controller.payment.paymentIntent);
appRoute.post('/confirm-payment',controller.payment.confirmPayment);
module.exports=appRoute;