import { Router } from "express";
import trailService from "../services/trailService.js";


const detailsRouter = Router();

detailsRouter.get('/:trailId', async (req, res) => {
    const trailId = req.params.trailId;

    try{
        const trail = await trailService.getOne(trailId);  
        
        res.status(200).json(trail);
    } catch(err) {
        const errorMessage = err.message || 'Invalid trail';

        res.status(404).json({err: errorMessage});
    }
});

export default detailsRouter;