const path = require('path');

module.exports={
    "PORT":3000,
    "DATABASE":"mongodb+srv://justorder:justorder@cluster0.ff5ml.mongodb.net/justorder?retryWrites=true&w=majority",
    "tokenDuration": "90d",
    "sgMail":process.env.sgMail,
    "DB_HOST":"http://192.168.29.73",
    "VERSION":"v1",
    "hosts": ["http://192.168.29.73:8000"],
    "allowedOrigins": ["http://192.168.29.73:8000"],
    "secret": "Pings:TakingYourExperienceToANewLevel.",
    "imagePath": path.join(__dirname,'../api/uploads/'),
    "fileUrl":"http://192.168.29.73:8000",
    "STRIPE_SK":"sk_test_51JnHK2SHnHscHf9HeaQgpApblm7ezQlPlRwGPTmiLSmC3R22QjL9ZugI5EwTpzqKT1HrpNOzBjtg5C2StoMmnqZD00Rg98kHWe"
}