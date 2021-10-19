const ukcodeSchema=require('../../models/ukcode');

let listAllUkCode=async (req, res, next) => {
    try {
        const allCode = await ukcodeSchema.find({});
        return res.status(200).json({
            success:true,
            message:"all code list",
            codes:allCode
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            isError:true
        })
    }
}


module.exports =[
    listAllUkCode
]