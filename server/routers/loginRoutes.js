import { Router } from "express";
import userService from "../services/userService";


const loginController = Router();

loginController.post('/', async (req, res) => {
    const {email, password} = req.body;

    const token = await userService.login(email, password);

    res.status(200).json(token);
});

export default loginController;