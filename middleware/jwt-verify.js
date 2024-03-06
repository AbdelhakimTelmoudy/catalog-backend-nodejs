const jwt = require('jsonwebtoken');

exports. generateToken = (payload) => {
    return jwt.sign(payload, 'your_secret_key', { expiresIn: '30s' }); // Change 'your_secret_key' to a secret key of your choice
};

exports. verifyToken = (token) => {
    try {
        return jwt.verify(token, 'your_secret_key');
    } catch (error) {
        return null;
    }
};
