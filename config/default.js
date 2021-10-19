const path = require('path');

module.exports={
    "PORT":3000,
    "DATABASE":"mongodb+srv://justorder:justorder@cluster0.ff5ml.mongodb.net/justorder?retryWrites=true&w=majority",
    "tokenDuration": "90d",
    "HOST":"https://just-server-app.herokuapp.com/",
    "VERSION":"v1",
    "secret": "Pings:TakingYourExperienceToANewLevel.",
    "imagePath": path.join(__dirname,'../api/uploads/'),
    "fileUrl":"http://192.168.0.163:3000"
}