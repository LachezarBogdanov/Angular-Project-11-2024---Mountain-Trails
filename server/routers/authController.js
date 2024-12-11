import { Router } from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE_NAME } from "../constants.js";

const authController = Router();

authController.post('/', async (req, res) => {
    
    const {email, passGroup: {password, rePassword}, username} = req.body;
    
    try{

        const data = await userService.create(username, email, password);
        res.cookie(AUTH_COOKIE_NAME, data.token, {httpOnly: true, sameSite: 'None', secure: true});
        res.status(201).json(data.newUser);

    } catch(err) {

        const errorMessage = err.message || 'User already exist';

        res.status(401).json({err: errorMessage});
    }

});

export default authController;