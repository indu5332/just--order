const path = require('path');

module.exports={
    "DATABASE":"mongodb+srv://justorder:justorder@cluster0.ff5ml.mongodb.net/justorder?retryWrites=true&w=majority",
    "tokenDuration": "90d",
    "DB_HOST":"https://just-server-app.herokuapp.com/",
    "VERSION":"v1",
    "hosts": ["https://just-server-app.herokuapp.com/",],
    "allowedOrigins": ["https://just-server-app.herokuapp.com/"],
    "secret": "Pings:TakingYourExperienceToANewLevel.",
    "imagePath": path.join(__dirname,'../api/uploads/'),
    "fileUrl":"https://just-server-app.herokuapp.com"
}