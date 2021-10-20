const path = require('path');

module.exports={
    "DATABASE":"mongodb+srv://justorder:justorder@cluster0.ff5ml.mongodb.net/justorder?retryWrites=true&w=majority",
    "tokenDuration": "90d",
    "DB_HOST":"https://just-order-api.herokuapp.com/",
    "VERSION":"v1",
    "hosts": ["https://just-order-api.herokuapp.com/",],
    "allowedOrigins": ["https://just-order-api.herokuapp.com/"],
    "secret": "Pings:TakingYourExperienceToANewLevel.",
    "imagePath": path.join(__dirname,'../api/uploads/'),
    "fileUrl":"https://just-order-api.herokuapp.com/"
}