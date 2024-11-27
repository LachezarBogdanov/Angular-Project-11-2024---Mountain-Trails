import { Router } from "express";
import userService from "../services/userService.js";

const authController = Router();

authController.post('/', async (req, res) => {
    const {username, email, password} = req.body;

    try{
        const token = await userService.create(username, email, password);
        
        res.status(201).json({token});
    } catch(err) {
        res.status(404).json(err);
    }

});

export default authController;