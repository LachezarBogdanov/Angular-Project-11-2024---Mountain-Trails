import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import User from "../models/User.js";
import userService from "../services/userService.js";


const profileController = Router();

profileController.get('/', authMiddleware, async (req, res) => {
        
    try {
        const user = await User.findById(req.user); 
      
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.json({err})
    }
});

profileController.put('/edit/:userId', async (req, res) => {
    
    const userId = req.params.userId;
    const data = req.body.data;

   
    try {
        await userService.updateUser(userId, data);

        res.status(200).json({});
    } catch (error) {
        const errorMessage = err.message || 'Invalid user or password';

        res.status(404).json({err: errorMessage});
    }
})

export default profileController;