const { verifyToken } = require("./jwt-verify");

exports.authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        const user = verifyToken(token);
        if (user) {
            req.user = user;
            next();
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(401);
    }
};
