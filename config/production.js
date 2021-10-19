module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    secert: process.env.secert,
    tokenDuration: process.env.tokenDuration,
    hosts: [
      "*",
    ],
    allowedOrigins: [
      "*",
    ],
    imagePath: process.env.imagePath,
  };
  