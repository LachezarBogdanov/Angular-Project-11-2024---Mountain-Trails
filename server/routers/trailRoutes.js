import { Router } from "express";
import trailService from "../services/trailService.js";


const trailRoutes = Router();

trailRoutes.post('/', async (req, res) => {
    const {description, difficulty, img, mileage, name, price, type} = req.body;
    console.log({description, difficulty, img, mileage, name, price, type});
    

    try {
        await trailService.create(description, difficulty, img, mileage, name, price, type);
        
        res.status(201).json({});
    } catch (error) {
        console.log(error);
        
    }

});

export default trailRoutes;