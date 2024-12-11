import { Router } from "express";
import trailService from "../services/trailService.js";


const editRoutes = Router();

editRoutes.put('/:trailId', async (req, res) => {
    const data = req.body;
    const id = req.params.trailId;

    try {
        await trailService.update(data, id);
        res.status(200).json({});
    } catch (error) {
        const errorMessage = err.message || 'Invalid credentials';

        res.status(404).json({err: errorMessage});
    }
});

export default editRoutes;