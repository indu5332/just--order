const jwt = require("jsonwebtoken");
const config = require("config");

let authentication = (request, response, next) => {
  const token =
    request.headers["x-access-token"];
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return response.json({
          success: false,
          message: "Failed to authenticate token.",
        });
      } else {
        request.decoded = decoded;
        next();
      }
    });
  } else {
    return response.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }
};

module.exports = authentication;