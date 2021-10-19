const express=require("express");
const appRoute=express.Router();
const controller=require("../controller");
const checkImage=require("../controller/hotel/checkimage");

appRoute.get("/",controller.home)
appRoute.post("/signup",controller.auth.signup);
appRoute.post("/login",controller.auth.login);
appRoute.get("/view/hotels",controller.hotel.viewhotels);
appRoute.get("/hotel/services/list",controller.hotel.services.list_service);
//admin work
appRoute.get('/currentuser',controller.auth.current_user); 
appRoute.post("/hotel/login",controller.hotel.auth.login);
appRoute.post('/restaurant/login',controller.restaurant.auth.login);
appRoute.get('/restaurant/list',controller.restaurant.list);
appRoute.get("/view/hotels",controller.hotel.viewhotels);

appRoute.use(controller.authentication);

appRoute.post("/add/review",controller.hotel.review.add_review)
appRoute.get("/list/review/:hotelId",controller.hotel.review.list_review)
appRoute.get("/delete/review/:reviewId",controller.hotel.review.delete_review)

//appRoute.post("/reset-password", controller.auth.resetpassword);
appRoute.post("/send-resetmail", controller.auth.sendVerificationLink);
appRoute.post("/verify-email-token", controller.auth.verifyEmailToken);
appRoute.get("/user",controller.user.userdetails);
appRoute.post("/change-password",controller.auth.change_password);
appRoute.post("/user/update",controller.user.update);
appRoute.post("/add/hotel",controller.hotel.addhotel);
appRoute.get("/view/hotel/:hotelId",controller.hotel.hotels);
appRoute.get("/view/hotel/booking",controller.hotel.booking.list_booking);
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
appRoute.get('/list/other',controller.other.list_service);
appRoute.post('/other/service/add',controller.otherService.add_other_service)
appRoute.get('/other/delete/:itemId',controller.other.delete_service);
appRoute.get('/other/service/delete/:serviceId',controller.otherService.delete_other_service)
appRoute.get('/other/service/list',controller.otherService.list)
appRoute.get('/list/areacode',controller.areacode.list_area_code);

appRoute.post("/add/hotel/booking",controller.hotel.booking.add_booking);
appRoute.post("/delete/hotel/booking",controller.hotel.booking.delete_booking);
appRoute.post("/update/hotel/booking/:bookingId",controller.hotel.booking.update_booking);
appRoute.get("/hotel/check/booking/:roomtype",controller.hotel.booking.check_booking);
// appRoute.GETget("/update/device/token/:deviceId",controller.hotel.device);
appRoute.post("/hotel/add/service",controller.hotel.services.add_services);

appRoute.get("/delete/hotel/services/:serviceId",controller.hotel.services.delete_service);
appRoute.post("/update/hotel/services/:serviceId",controller.hotel.services.update_service);
appRoute.get("/hotel/service/analytic",controller.hotel.services.analytic);
// appRoute.post("/hotel/password/change",controller.hotelauth.change_password);
appRoute.post('/restaurant/add',controller.restaurant.add_restaurant);

module.exports=appRoute;