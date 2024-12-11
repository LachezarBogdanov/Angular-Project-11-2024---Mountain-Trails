import { Router } from "express";
import guideService from "../services/guideService.js";


const getOneGuideController = Router();

getOneGuideController.get('/:guideName', async (req, res) => {
    const name = req.params.guideName;
    
    try {
       const guide = await guideService.getOne(name);

       res.status(200).json(guide);
       
    } catch (err) {
        const errorMessage = err.message || 'Invalid guides';

        res.status(404).json({err: errorMessage});
    }
})

export default getOneGuideController;