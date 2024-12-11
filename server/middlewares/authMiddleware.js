import { AUTH_COOKIE_NAME, JWT_SECRET } from "../constants.js";
import jwt from 'jsonwebtoken';


export const authMiddleware = async (req, res, next) => {
    const token = req.cookies[AUTH_COOKIE_NAME];
            
    if(!token) {
       return res.status(401).json({user: 'No user'})
    }
    
    try{
        const decodedToken = await jwt.verify(token, JWT_SECRET);
        
        req.user = decodedToken;
        // req.isAuthenticated = true;

        // res.locals.user = decodedToken;
        // res.locals.isAuthenticated = true;

        next();

    } catch(err) {
        res.clearCookie(AUTH_COOKIE_NAME);

        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

// export const isAuth = (req, res, next) => {
//     if(!req.user) {
//         return res.redirect('/auth/login');
//     }

//     next();
// }