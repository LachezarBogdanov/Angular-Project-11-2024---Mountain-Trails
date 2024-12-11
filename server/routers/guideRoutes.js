import { Router } from "express";
import guideService from "../services/guideService.js";


const guideRoutes = Router();

guideRoutes.get('/', async (req, res) => {

    try {
        const allGuides = await guideService.getAll();  
        
        res.status(200).json(allGuides)
    } catch (err) {
        const errorMessage = err.message || 'Invalid guides';

        res.status(404).json({err: errorMessage});
    }
})

export default guideRoutes;