import { Router } from "express";
import trailService from "../services/trailService.js";


const likeController = Router();

likeController.put('/:trailId', async (req, res) => {
    const trailId = req.params.trailId;
    const userId = req.body.userId;
    
    try {
        await trailService.like(trailId, userId);

        res.status(200).json({});
    } catch (error) {
        const errorMessage = err.message || 'Error';

        res.status(404).json({err: errorMessage});
    }    
})

export default likeController;