const express=require('express');
var cors = require('cors');
const app = express();

const morgan = require('morgan');
const routes=require("./api/routes/appRoute");
const foodRoutes=require("./api/routes/fooRoutes");
const userRoutes=require("./api/routes/user");
const config = require('config'); 


app.use(cors());
// use body parser so we can get info from POST and/or URL parameters
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require('./api/database/database');
app.use(`/api/${config.VERSION}`, userRoutes);
app.use(`/api/${config.VERSION}`, routes);
app.use(`/api/${config.VERSION}`,foodRoutes)

const PORT = process.env.PORT || 3000;
// Serve Static files
 app.use(express.static(__dirname+"/api/uploads/"));
app.use(morgan('combined'));
app.listen(3000,'0.0.0.0',() => console.log(`Example app listening at ${config.HOST}:${PORT}/api/${config.VERSION}`));