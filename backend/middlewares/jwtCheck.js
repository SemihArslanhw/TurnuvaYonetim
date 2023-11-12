import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export default function jwtCheck(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Token is not valid" });
    }
}

export default function userVerification(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        User.findById(req.user.id)
            .then(user => {
                if (user) {
                    next();
                } else {
                    return res.status(401).json({ message: "Token is not valid" });
                }
            })
            .catch(err => console.error(err));
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Token is not valid" });
    }
}