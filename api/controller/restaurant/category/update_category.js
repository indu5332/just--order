const categorySchema=require('../../../models/category');
const mongoose = require('mongoose');


let updateCategory =async(req, res, next)=>{
    try {
       const conditions={
           _id:mongoose.Types.ObjectId(req.params.id)
       }
       const dataToUpdate={
           $set:{
               categoryName:req.body.categoryName
           }
       }
        const updateResponse = await categorySchema.updateOne(conditions, dataToUpdate);
        if(updateResponse.modifiedCount>0){
            return res.status(200).json({
                success: true,
                message: 'Category Updated Successfully',
                
            })
        }
        else {
            return res.status(500).json({message: 'Fail to update category',success: false})
        }
    } catch (error) {
        return res.status(500).json({message: error.message,success: false});
    }
}

module.exports =[
    updateCategory,
]