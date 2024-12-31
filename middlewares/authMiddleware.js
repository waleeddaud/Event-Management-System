// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const {User} = require('../models');

const authenticateToken = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access Denied' });

    try {
        const verified = jwt.verify(token, 'your_secret_key');
        req.user = await User.findByPk(verified.id);
        next();
    } catch (err) {
        res.status(403).json({ error: 'Invalid Token' });
    }
};

module.exports = authenticateToken;
