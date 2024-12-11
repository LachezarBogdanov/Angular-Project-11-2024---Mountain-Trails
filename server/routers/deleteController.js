import { Router } from "express";
import trailService from "../services/trailService.js";


const deleteController = Router();

deleteController.delete('/:trailId', async (req, res) => {
    const trailId = req.params.trailId;

    try {
        await trailService.deleteTrail(trailId);

        res.status(200).json({});
    } catch (error) {
        const errorMessage = err.message || 'Invalid trail';

        res.status(404).json({err: errorMessage});
    }
})

export default deleteController;