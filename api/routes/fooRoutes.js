const express=require("express");
const foodRoute=express.Router();
const controller=require("../controller");
const checkImage=require("../controller/hotel/checkimage");
const multer=require('multer')
const config=require('config');
const path=require('path');
const p=path.join(__dirname+"/../uploads/");

var storage=multer.diskStorage({
    destination:(req,res,cb)=>{cb(null,p)},
    filename:(req,file,cb)=>{
        let ext=file.originalname.split(".");
        cb(null,Date.now()+"."+ext[ext.length-1])
    }
});
var upload=multer({storage:storage});

foodRoute.post('/file/upload',upload.single('file'),controller.file.upload);

foodRoute.post('/category/add',controller.restaurant.category.add_category);
foodRoute.get('/category/list/:restaurantId',controller.restaurant.category.list_category);
foodRoute.post('/category/update/:id',controller.restaurant.category.update_category);
foodRoute.get('/category/remove/:id',controller.restaurant.category.delete_category);

foodRoute.post('/menu/add',controller.restaurant.menu.add_menu);
foodRoute.get('/menu/list/:restaurantId',controller.restaurant.menu.list_menu);
foodRoute.post('/menu/remove',controller.restaurant.menu.remove_menu);
foodRoute.post('/menu/update',controller.restaurant.menu.update_menu);
foodRoute.post('/menu/option/pull',controller.restaurant.menu.option.pull_option);
foodRoute.post('/menu/option/push',controller.restaurant.menu.option.push_option);
foodRoute.get('/menu/option/list/:menuId',controller.restaurant.menu.option.option_list);

foodRoute.post('/size/add',controller.restaurant.size.add_size);
foodRoute.post('/size/remove',controller.restaurant.size.remove_size);
foodRoute.get('/size/list/:menuId',controller.restaurant.size.list_size);

foodRoute.get('/option/list/:menuId',controller.restaurant.option.detail_option);
foodRoute.post('/option/add',controller.restaurant.option.add_option);
foodRoute.post('/option/remove',controller.restaurant.option.remove_option);
foodRoute.post('/option/push',controller.restaurant.option.push_option);
foodRoute.post('/options/pull',controller.restaurant.option.pull_option);

foodRoute.post('/coupon/add',controller.restaurant.coupon.add_coupon);
foodRoute.get('/coupon/remove/:couponId',controller.restaurant.coupon.remove_coupon);
foodRoute.get('/coupon/list',controller.restaurant.coupon.list_coupon);

foodRoute.post('/cart/add',controller.restaurant.cart.add_to_cart);
foodRoute.get('/cart/list',controller.restaurant.cart.list_cart_items);
foodRoute.get('/cart/detail/:cartId',controller.restaurant.cart.detail_cart_item);
foodRoute.delete('/cart/delete/:cartId',controller.restaurant.cart.delete_cart_item);
foodRoute.delete('/cart/empty',controller.restaurant.cart.empty_cart);
foodRoute.post('/cart/update/:cartId',controller.restaurant.cart.update_cart_item);

foodRoute.post('/order/add',controller.restaurant.order.add_order);
foodRoute.get('/order/detail/:orderId',controller.restaurant.order.detail_order);
foodRoute.get('/order/list',controller.restaurant.order.list_order);

foodRoute.post('/payment/add',controller.restaurant.payment.payment_service);

foodRoute.get('/charges/list',controller.restaurant.charges.list_charge);
foodRoute.post('/charges/add',controller.restaurant.profile.update_profile);

foodRoute.get('/time/list',controller.restaurant.time.list_time);
foodRoute.post('/time/add',controller.restaurant.time.add_time);
foodRoute.get('/time/remove/:timeId',controller.restaurant.time.remove_time);
foodRoute.post('/time/update/:timeId',controller.restaurant.time.update_time)

foodRoute.get('/restaurant/info',controller.restaurant.profile.general_info);
// foodRoute.post('/update/image',controller.file.upload_file_to_aws);

foodRoute.post('/notification',controller.notification.create_notification);

module.exports=foodRoute;