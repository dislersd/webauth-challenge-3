const jwt = require("jsonwebtoken");
const secret = require('./secret.js')


module.exports = (req, res, next) => {
  // STEP 5 - refactor restricted
  // const { username, password } = req.headers; - no longer need
  // STEP 5.1 - define token as authorization in headers
  const token = req.headers.authorization;
  if (token) {
    // STEP 5.2 verify with jwt library
    jwt.verify(token, secret.jwtSecret, (error, decodedToken) => {
      if(error) {
        res.status(401).json({ message: 'Invalid Creds' })
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({ message: 'No token provided' })
  }
};
