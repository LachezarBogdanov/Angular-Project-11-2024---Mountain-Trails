import { Router } from "express";
import { AUTH_COOKIE_NAME } from "../constants.js";


const logoutController = Router();

logoutController.post('/', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);

    res.status(200).json({});
})

export default logoutController;