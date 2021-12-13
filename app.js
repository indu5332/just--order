const express=require('express');
var cors = require('cors');
const app = express();

const morgan = require('morgan');
const routes=require("./api/routes/appRoute");
const foodRoutes=require("./api/routes/fooRoutes");
const userRoutes=require("./api/routes/user");
const config = require('config'); 
const verifyToken = require("./api/controller/authentication");
// use body parser so we can get info from POST and/or URL parameters
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require('./api/database/database');
app.use(`/api/${config.VERSION}`, userRoutes);
app.use(`/api/${config.VERSION}`, routes);
app.use(`/api/${config.VERSION}`,foodRoutes)
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: config.hosts,
    methods: ["GET", "POST"],
    allowedHeaders: ["x-access-token"],
    credentials: true,
  },
});
app.set("io", io);

app.use(cors());

io.on("connection", (socket) => {
    const user = verifyToken.authentication(socket.request.headers["x-access-token"]);
    if (user.length > 0) {
      socketOperation.joinSocket(socket, user[0]._id, user[0].id);
      socket.on("sendNotification", async (msg) => {
        socketOperation.msgWithFile(msg, user[0]._id, io);
      });
      socket.on("disconnect", (reason) => {
        socketOperation.disconnectServer(socket, user[0]._id);
      });
    }
  });
const PORT = process.env.PORT || 8000;
// Serve Static files
app.use(express.static(__dirname+"/api/uploads"));
app.use(morgan('combined'));
server.listen(process.env.PORT || 8000,'0.0.0.0',() => console.log(`Example app listening at ${config.DB_HOST}:${PORT}/api/${config.VERSION}`));