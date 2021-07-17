const path = require("path").resolve;
const jsonwebtoken = require('jsonwebtoken');
const config = require(path('config/constants'));
const ResponseService = require(path('common/response'))

module.exports = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jsonwebtoken.verify(token, config.authSecretToken);

        req._userInfo = {
            _user_id: decoded.id || undefined,
            _user_type: decoded.type || undefined,
        };

        console.log('Authenticated...');
        next();

    } catch (e) {
        return res.status(401).send(ResponseService.failure(401));
    }
};