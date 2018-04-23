const jwt = require('jsonwebtoken');

let functions = {};

functions.checkAuthentication = (req, res, next) => {
  const token = req.headers['x-token'];
  if(!token) {
    return res.status(403).send({
      code: 3000,
      message: 'No token provided.'
    });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if(err) {
      return res.status(500).send({
        code: 3000,
        message: 'Failed to authenticate token.'
      });
    }

    req.userId = decoded.id;
    next();
  });
}

module.exports = functions;
