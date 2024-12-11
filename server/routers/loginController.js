import { Router } from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";


const loginRoutes = Router();

loginRoutes.post('/', async (req, res) => {
    const {email, password} = req.body;

    try{
    const data = await userService.login(email, password);
        res.cookie(AUTH_COOKIE_NAME, data.token, {httpOnly: true, sameSite: 'None', secure: true});
        res.status(200).json(data.user);
    }catch(err) {
        const errorMessage = err.message || 'Invalid user or password';

        res.status(401).json({err: errorMessage});
    }
});

export default loginRoutes;