const AddressSchema=require('../../models/address');

let addAddress=async(req,res)=>{
    try {
        const Address=await AddressSchema.create({...req.body,userId:req.decoded._id});
        if(Address){
            console.log(Address)
            return res.status(200).json({
                success:true,
                message:"Address added successfully",
                Address:Address
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            isError:true,
            message:error.message
        })
    }
}
module.exports=[
    addAddress
]