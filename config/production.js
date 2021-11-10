const path = require('path');

module.exports={
    "DATABASE":"mongodb+srv://justorder:justorder@cluster0.ff5ml.mongodb.net/justorder?retryWrites=true&w=majority",
    "tokenDuration": "90d",
    "DB_HOST":"https://just-order-server.herokuapp.com/",
    "VERSION":"v1",
    "hosts": ["https://just-order-server.herokuapp.com/",],
    "allowedOrigins": ["https://just-order-server.herokuapp.com/"],
    "secret": "Pings:TakingYourExperienceToANewLevel.",
    "imagePath": path.join(__dirname,'../api/uploads/'),
    "fileUrl":"https://just-order-server.herokuapp.com/",
    "STRIPE_SK":"sk_test_51JnHK2SHnHscHf9HeaQgpApblm7ezQlPlRwGPTmiLSmC3R22QjL9ZugI5EwTpzqKT1HrpNOzBjtg5C2StoMmnqZD00Rg98kHWe"
}