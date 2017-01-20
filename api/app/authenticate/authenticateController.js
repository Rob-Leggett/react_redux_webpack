const jwt = require('jsonwebtoken');

const config = require("../configuration/config");

const queryUser = require('../user/db/query/queryUser');

function authenticate(req, res) {
  queryUser.getByName(req.body.name).then((user, err) => {

    if (err || !user || user.password != req.body.password) {
      res.status(403).json({name: req.body.name, error: 'Authentication failed.'});
    } else {
      const token = jwt.sign({ name: user.name, role: user.role }, config.secret, { expiresIn : 60*60*24 });

      res.status(200).json({name: user.name, role: user.role, token: token});
    }
  });
}

// set up endpoint functions and pass them via module.exports
module.exports = {
  authenticate
};