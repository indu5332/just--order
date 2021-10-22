const menuModel=require('../../../../models/menu');
const mongoose=require('mongoose');

let pushOptionToMenu=async(req,res,next)=>{
    let options=[];
    (req.body.options).map(id=>options.push({optionId:mongoose.Types.ObjectId(id)}))
    try {
        const condition ={
            _id:mongoose.Types.ObjectId(req.body.menuId),
        }
        const dataToUpdate={
            $push:{
                options:{
                    $each:options
                }
            }
        }
        const updateRes=await menuModel.updateOne(condition,dataToUpdate);
        if(updateRes.modifiedCount>0){
            return res.status(200).json({
                success: true,
                message:"Option added successfully"
            });
        }
        else {
            return res.status(500).json({
                success: false,
                message:"fail to add option"
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: error.message,success: false});
    }
}

module.exports=[
    pushOptionToMenu
]