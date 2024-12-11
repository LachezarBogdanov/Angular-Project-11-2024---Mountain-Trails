import { Router } from "express";
import trailService from "../services/trailService.js";


const trailRoutes = Router();

trailRoutes.post('/', async (req, res) => {
    console.log(req.body.trailsData);
    
    const {img, name, difficulty, description, guide, duration, mountain, type, price, mileage} = req.body.trailsData;
    const userId = req.body.userId;
    
    try {
        await trailService.create(img, name, difficulty, description, guide, duration, mountain, type, price, mileage, userId);
        
        res.status(201).json({});
    } catch (error) {
        console.log(error);
        
    }

});

export default trailRoutes;