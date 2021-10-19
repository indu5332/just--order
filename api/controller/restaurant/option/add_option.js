const restaurantModel=require('../../../models/menu_option');
const mongoose=require('mongoose');

let addMenu=async(req,res,next)=>{
        try {
            let updateRes=await restaurantModel.create({...req.body,restaurantId:req.decoded._id});
            if(updateRes){
                return res.status(200).json({
                    success:true,
                    message:"option added successfully",
                    updateRes:updateRes
                })
            }
            else {
                return res.status(500).json({
                    success:false,
                    message:"fail to add option",
                    updateRes:updateRes
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success:false,
                isError:true,
                error:error
            })
        }
}


module.exports=[    
    addMenu
]